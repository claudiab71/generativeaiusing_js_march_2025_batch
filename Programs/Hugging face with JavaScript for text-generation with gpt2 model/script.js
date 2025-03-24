const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1";
const API_TOKEN = "please write your token"; // Replace with your token

async function generateText() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");

    if (!input) {
        output.innerText = "Please enter a prompt.";
        return;
    }
    output.innerText = "Generating...";
// axios third party library for react js to make api calls
// angular framework we use HttpClient API to make api calls 
// node js  fetch-node or axios for make api calls 
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: input })
        });

        const result = await response.json();
        //console.log(result)
        output.innerText = result[0].generated_text || "No response received.";
        document.getElementById("inputText").value = "";
    } catch (error) {
        output.innerText = "Error generating text!";
        console.error(error);
    }
}
