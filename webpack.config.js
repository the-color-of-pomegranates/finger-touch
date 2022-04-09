
// https://webpack.js.org/concepts/entry-points/
// $  ./node_modules/.bin/webpack ...something something
// module.exports = {
//   entry: {
//     main: './app.js',
//   },
//   output: {
//     filename: './bundle.js',
//   },
// };


// https://webpack.js.org/guides/getting-started/
// $ npx webpack--config webpack.config.js

const path = require('path');

module.exports = {
  // https://webpack.js.org/configuration/mode/
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};