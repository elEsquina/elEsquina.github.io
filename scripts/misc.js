function getRandomDelay(){
    return Math.floor( Math.random() * 10000 ) + 1000;
}

function generateClouds(){
    const cloudContainer = document.getElementById("cloud_container");

    setInterval(() => {
        
        if (cloudContainer.childElementCount > 10) {
            return;
        }

        const cloud = document.createElement("div");
        cloud.classList.add("cloud" + Math.floor(Math.random() * 2 + 1) );
        cloud.style.top = Math.floor(Math.random() * 100) + "%";

        cloudContainer.appendChild(cloud);

    }, getRandomDelay());

}

generateClouds();