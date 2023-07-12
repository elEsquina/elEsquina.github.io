fetch('spots.json')
  .then(response => response.json())
  .then(data => {
    const spotContainer = document.getElementById('spot-container');
    data.forEach(spot => {
      const spotElement = document.createElement('div');
      if (spot.type === 'image') {
        const imageElement = document.createElement('img');
        imageElement.src = spot.imageUrl;
        spotElement.appendChild(imageElement);
      } else if (spot.type === 'video') {
        const videoElement = document.createElement('iframe');
        videoElement.src = spot.videoUrl;
        spotElement.appendChild(videoElement);
      }
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = spot.paragraph;
      spotElement.appendChild(paragraphElement);
      spotContainer.appendChild(spotElement);
    });
  })
  .catch(error => {
    console.log('Error loading spots:', error);
  });

