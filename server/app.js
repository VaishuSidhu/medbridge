const express = require('express');
const bodyParser = require('body-parser');
const voiceToText = require('./api/voiceToText');
const healthRecords = require('./api/healthRecords');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/api/voice-to-text', voiceToText);
app.post('/api/health-records', healthRecords);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});