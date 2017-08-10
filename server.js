const express = require('express');

const app = express();
const port = process.env.PORT || 8080 ;

app.use(express.static(__dirname + '/'));
app.listen(port);

require('./controllers/controller.js')(app);
