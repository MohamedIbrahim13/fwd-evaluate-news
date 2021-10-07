const dotenv = require("dotenv");
dotenv.config();


const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const axios = require("axios");
const mockAPI = require("./mockAPI.js");
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const meaningCloudKey = process.env.API_KEY;


app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req, res)=>{
  res.sendFile("dist/index.html");
});

app.get("/test",(req, res)=>{
  res.send(mockAPI);
});

app.post("/article-url", async (req, res) => {
  const { url } = req.body;
  const apiURL = `${baseURL}?key=${meaningCloudKey}&txt=${url}&lang=en`;

  try {
    const {
      data: {
        sentence_list,
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony,
      },
    } = await axios(apiURL);
    res.send({
      text: sentence_list[0].text || "",
      score_tag: score_tag,
      agreement: agreement,
      subjectivity: subjectivity,
      confidence: confidence,
      irony: irony,
    });
	console.log(sentence_list[0])
  } catch (err) {
    console.log(err.message);
  }
});

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
