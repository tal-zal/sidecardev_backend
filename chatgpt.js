const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()

const { Configuration, OpenAIApi } = require('openai');

require('dotenv').config();

const chatgptConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatgpt = new OpenAIApi(configuration);

// route for prompting chatgpt
router.post('/chatgpt', jsonParser, async (req, res) => {
    const prompt = req.body.prompt;

    try {
        if (prompt == null) {
            throw new Error("Error: no prompt provided");
        }
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
        });

        // return the text portion of the promise
        return res.send(response.data.choices[0].text);
    } catch (error) {
        console.log(error.message);
    }

}

// Export the initialized Firebase app's database
module.exports = router;
