// import 'dotenv/config';
// import 'dotenv';
// import require from 'requirejs';
// require('dotenv').config()

// import twilio from 'twilio';


// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const client = new twilio(accountSid, authToken);


const giphyApiKeyEncoded = encodeURIComponent(giphyApiKey);
// const giphyQueryUrl = `https://api.giphy.com/v1/gifs/search?${giphyApiKeyEncoded}&q=thinking+about+you&limit=1&rating=g&lang=en`;

// const fetchGif = () => {

//use jQuery to listen for click
  $("#btn").click(() => {
    console.log('button clicked!')
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKeyEncoded}&tag=love&rating=g`;
    //make the API call to giphy 

    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log(data, 'this is the data retrieved from giphy');
        //get gif url from data
        const gifUrl = data.data.embed_url;
        console.log('gifUrl here:', gifUrl)

        //send that gif url to twilio
        // client.messages
        //   .create({
        //     body: 'thinking of you',
        //     mediaUrl: '',
        //     to: '+18043179313', // Text this number
        //     from: '+13203968302', // From a valid Twilio number
        //   })
        //   .then((message) => console.log(message.sid));

      },
      error: function (err) {
        console.error(err);
      }



    });

  });


// }

// const sendGif = () => {
//   //sends the gif to me via text or email 

// client.messages
//   .create({
//     body: 'Hello there!',
//     from: '+15555555555',
//     mediaUrl: ['https://demo.twilio.com/owl.png'],
//     to: '+12316851234'
//   })
//   .then(message => console.log(message.sid));
// }

