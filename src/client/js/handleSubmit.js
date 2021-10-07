import isValidURL from "./urlChecker";


const handleSubmit = async () => {
  const articleURL = document.getElementById("url").value;
  if (isValidURL(articleURL)) {
    const outputData = await postFormData("http://localhost:3001/article-url", {
      articleURL,
    });

   
    document.getElementById("text").textContent = outputData.text;
    document.getElementById("agreement").textContent = outputData.agreement;
    document.getElementById("confidence").textContent = outputData.confidence;
    document.getElementById("score_tag").textContent = outputData.score_tag;
    document.getElementById("subjectivity").textContent = outputData.subjectivity;
    document.getElementById("irony").textContent = outputData.irony;
	//return outputData
  } else {
    alert("Enter a valid URL");
  }
};

export default handleSubmit;


async function postFormData(articleUrl = "", outputData = {}){
  const res = await fetch(articleUrl, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(outputData),
  });
  try {
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
