const { SpeechClient } = require('@google-cloud/speech');

const client = new SpeechClient();

async function voiceToText(req, res) {
    const audio = req.body.audio;

    const request = {
        audio: {
            content: audio,
        },
        config: {
            encoding: 'LINEAR16',
            sampleRateHertz: 16000,
            languageCode: 'en-US',
        },
    };

    const [response] = await client.recognize(request);
    const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');

    res.send({ transcription });
}

module.exports = voiceToText;