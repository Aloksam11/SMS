require('dotenv').config();
console.log('Your environment variable TWILIO_AUTH_TOKEN has the value: ', process.env.TWILIO_AUTH_TOKEN);
console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({ body: "Hello from Alok", from: "+15673721255", to: "+917988075677" })
  .then(message => console.log(message.sid));
