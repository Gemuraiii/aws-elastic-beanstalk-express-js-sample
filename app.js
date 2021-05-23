const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('There are obvious observations and conclusions you can draw from how you are treated. You are not something someone can pick up at any time when they are ready. Over my dead body. Make sure the conclusions are based off of facts or pure feelings and not anxiety at an all time high. Announce that respect is needed and see how you feel after.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
