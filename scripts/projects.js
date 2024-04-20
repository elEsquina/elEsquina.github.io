function loadProjects() {
  fetch('../portfolio.json')
      .then(response => response.json())
      .then(data => {

        const projectsContainer = document.getElementById('project_container');

        data.forEach(project => {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add('project_item');

            const link = document.createElement('a');
            link.textContent = project.title;

            link.addEventListener('click', function() {
              loadProjectDescription(project.title, project.url, project.desc, project.date);
            });

            const iframe = document.createElement('iframe');
            iframe.src = project.url;
            iframe.allowFullscreen = true;

            projectContainer.appendChild(link);
            projectContainer.appendChild(iframe);
            projectsContainer.appendChild(projectContainer);
        });
      })
      .catch(error => console.error('Error fetching projects.json:', error));

}

function loadProjectDescription(title, url, desc, date) {
  window.location.href = `./ProjectDescription.html?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&desc=${encodeURIComponent(desc)}&date=${encodeURIComponent(date)}`;
}

loadProjects();

function returnBack(){
  location.reload(true);
}

function returnAbout(){
  window.location.href = '../';
}

function clickExperiences(){
  //window.location.href = './experiences.html';
  alert("That page is not available at the moment!");
}
