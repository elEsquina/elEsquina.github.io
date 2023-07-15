let cloudInterval;
const cloudContainer = document.getElementById("cloud_container");
let cloudsGenerated = false;

function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000;
}

function generateClouds() {
  if (cloudsGenerated) {
    return;
  }
  cloudsGenerated = true;

  cloudInterval = setInterval(() => {
    if (cloudContainer.childElementCount >= 15) {
      return;
    }

    const cloud = document.createElement("div");
    cloud.classList.add("cloud" + Math.floor(Math.random() * 2 + 1));
    cloud.style.top = Math.floor(Math.random() * 100) + "%";

    cloudContainer.appendChild(cloud);
  }, getRandomDelay());

}

function stopClouds() {
  clearInterval(cloudInterval);
  while (cloudContainer.firstChild) {
    cloudContainer.firstChild.remove();
  }
}

window.addEventListener('beforeunload', function() {
  stopClouds();
  cloudsGenerated = false;
});

window.addEventListener("pageshow", generateClouds);
