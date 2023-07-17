const cloudContainer = document.getElementById("cloud_container");
let cloudsGenerated = false;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000;
}


async function generateClouds() {

  if (cloudsGenerated) {
    return;
  }
  cloudsGenerated = true;

  while (!(cloudContainer.childElementCount >= 15)){

    const cloud = document.createElement("div");
    cloud.classList.add("cloud" + Math.floor(Math.random() * 2 + 1));
    cloud.style.top = Math.floor(Math.random() * 100) + "%";

    cloudContainer.appendChild(cloud);

    await wait(getRandomDelay());
  }

}

generateClouds();
