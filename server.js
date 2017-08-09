const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/index.html'));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});