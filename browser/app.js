'use strict';
import app from '../server.js';
// var requirejs = require('requirejs');
// var requirejs = import('require.js');
// requirejs('dotenv').config();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const sendToPhoneNumber = process.env.SEND_TO_PHONE_NUMBER;

const client = require('twilio')(twilioAccountSid, twilioAuthToken);

const giphyApiKey = process.env.GIPHY_API_KEY;
const giphyQuery = `https://api.giphy.com/v1/gifs/search?${giphyApiKey}&q=thinking+about+you&limit=1&rating=g&lang=en`


// const fetchGif = () => {
//   console.log(giphyQuery)
//    //make the query with fetch or axios etc
//   //then pass the value of query to a function that sends that query value via email or text to me
// }
const giphyApi = encodeURIComponent('');
const giphyQuery = `https://api.giphy.com/v1/gifs/search?${giphyApi}&q=thinking+about+you&limit=1&rating=g&lang=en`;


const fetchGif = () => {

  //make the query with fetch or axios etc
  $("#btn").click(() => {

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApi}&tag=love&rating=g`;
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log(data, 'this is the data retrieved from giphy');
        const gifUrl = data.data.embed_url;
        console.log('gifUrl here:', gifUrl)

      },
      error: function (err) {
        console.error(err);
      }



    });

  });


}

const sendGif = () => {
  //sends the gif to me via text or email 

client.messages
  .create({
    body: 'Hello there!',
    from: '+15555555555',
    mediaUrl: ['https://demo.twilio.com/owl.png'],
    to: '+12316851234'
  })
  .then(message => console.log(message.sid));
}