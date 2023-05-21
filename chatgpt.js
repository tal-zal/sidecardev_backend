const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const express = require('express');

var bodyParser = require('body-parser')
const router = express.Router();
const app = express();
var jsonParser = bodyParser.json()


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// remove 'User-Agent' header to bypass openai restriction on client application
delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);
var persona = "";

function setPersona(phrase) {
  persona = phrase.trim();
}

function createPrompt(message, codeText, codeLang) {
  let prompt = `${message}.
    If applicable, here is some code for context written in ${codeLang}: \`\`\`${codeText}\`\`\``;

  if (persona.length > 0) {
    prompt = `Please assume the persona of ${persona}` + prompt;
  }

  return prompt;
}

// retrieve the response from chatgpt api and set it in a callback
const getGPTResponse = async (
  message,
  codeText,
  codeLang,
  setResponse
) => {
  const prompt = createPrompt(message, codeText, codeLang);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
  });

  if (response.data.choices) {
    // setResponse(response.data.choices[0].text);
    return response.data.choices[0].text;
  }
};

router.get('/getGPTResponse', jsonParser, async (req, res) => {
    const postDataParam = req.query;
    const message = postDataParam.msg;
    const codeText = postDataParam.codeTxt;
    const codeLang = postDataParam.codeLng;
    const setResponse = postDataParam.setRespnse;
    const response = await getGPTResponse(message, codeText, codeLang, setResponse);
    res.send(response);
});

module.exports = router