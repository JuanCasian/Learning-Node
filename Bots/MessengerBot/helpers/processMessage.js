const API_AI_TOKEN = "dde74d0026634b6c91057b6f4aee14b4";
const apiAiClient = require("apiai")(API_AI_TOKEN);

const FACEBOOK_ACCESS_TOKEN = "EAAQtrGliZCZA4BAEkT8qNgoD5XHMBl5yNo6NiTE92uf2ZAukRWiUVzbb5cv0ZBUpUEG7DeooNXzKiZCQm3202WtgBlFFU2qnOUYwAB6Ne4Jng1XvR2MCW9ajJQPZAV1DZAmwuUMRqZBlGWCQzoRLtoWFq4VASPWHKURqqGx97yJ9razABD4p31KD"
const request = require("request");

const sendTextMessage = (senderId, text) => {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: FACEBOOK_ACCESS_TOKEN},
    mehtos: "POST",
    json: {
      recipient: {id: senderId},
      message: {text},
    }
  });
};

module.exports = (event) => {
  const senderId = event.sender.id;
  const message = event.message.text;

  const apiaiSession = apiAiClient.textRequest(message, {sessionId:
    "messenger-bot-prueba"});

  apiaiSession.on("response", (response) => {
    const result = response.result.fulfillment.speech;

    sendTextMessage(senderId, result);
  });

  apiaiSession.on("error", error => console.log(error));
  apiaiSession.end();
};
