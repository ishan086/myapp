//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + './dist'));

//app.get('*', (req, res) => {
//    res.sendFile(`./shopping-app/index.html`); // load the single view file (angular will handle the page changes on the front-end)
//});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);