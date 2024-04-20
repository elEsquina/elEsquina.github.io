function returnBack() {
    window.location.href = './projects.html';
}

function returnAbout(){
    window.location.href = '../';
}  

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const title = getQueryParam('title');
const url = getQueryParam('url');
const desc = getQueryParam('desc')
const datetime = getQueryParam('date')

const projectTitleElement = document.getElementById('project_title');
const projectIframeElement = document.getElementById('project_video');
const projectDesc = document.getElementById('project_desc');
const projectdate = document.getElementById('project_date');

projectTitleElement.innerHTML = title;
projectIframeElement.src = url;
projectDesc.innerHTML = desc + "<br>  Creation date:  <span id='project_date'>" + datetime +  "</span>";

