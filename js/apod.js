document.addEventListener("DOMContentLoaded", function() {
    // Make API call
    fetch("https://api.nasa.gov/planetary/apod?api_key=ZMgGTHFwN92JNnV2vJPMCDvhAMtttHJMdBIH1Xzd") 
        .then(response => response.json())
        .then(data => {
            // Update HTML with JSON data
            document.getElementById("title").innerText = data.title;
            document.getElementById("description").innerText = data.explanation;

            // Set the image source
            const imageElement = document.getElementById("image");
            imageElement.src = data.url;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
