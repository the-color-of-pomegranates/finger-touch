
require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log('.env file creds', accountSid);

const client = new twilio(accountSid, authToken);

// https://www.twilio.com/docs/libraries/reference/twilio-node/3.76.1/Twilio.Api.V2010.AccountContext.MessageList.html
client.messages
  .create({
    body: 'thinking of you',
    mediaUrl: '',
    to: '+18043179313', // Text this number
    from: '+13203968302', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));