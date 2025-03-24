const API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";
const API_TOKEN = "please write your token"; // Replace with your token

async function generateImage() {
    const input = document.getElementById("inputText").value;
    const imageRef = document.getElementById("imageOutput");

    if (!input) {
        output.innerText = "Please description the image you want to generate.";
        return;
    }
    //output.innerText = "Generating...";
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
        const blob = await response.blob();
        console.log(blob)
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl)
        imageRef.src = imageUrl;
        imageRef.style.display = "block";
    } catch (error) {
        output.innerText = "Error generating text!";
        console.error(error);
    }
}
