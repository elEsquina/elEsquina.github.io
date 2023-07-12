fetch('portfolio.json')
  .then(response => response.json())
  .then(data => {
    const portfolioContainer = document.getElementById('portfolio-container');
    data.forEach(entry => {
      const entryElement = document.createElement('div');
      entryElement.classList.add('portfolio-entry');

      if (entry.type === 'image') {
        const imageElement = document.createElement('img');
        imageElement.src = entry.url;
        entryElement.appendChild(imageElement);
      } else if (entry.type === 'video') {
        const videoElement = document.createElement('iframe');
        videoElement.src = entry.url;
        videoElement.setAttribute('allowfullscreen', true);
        entryElement.appendChild(videoElement);
      }

      const titleElement = document.createElement('h2');
      titleElement.textContent = entry.title;
      entryElement.appendChild(titleElement);

      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = entry.paragraph;
      entryElement.appendChild(paragraphElement);

      portfolioContainer.appendChild(entryElement);
    });
  })
  .catch(error => {
    console.log('Error loading portfolio:', error);
  });
