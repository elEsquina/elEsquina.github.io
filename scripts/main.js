let currentpage = 0;
let currentindx = "main";
let running = false;


let projects_page = 0;
let projectsjson;

const menus = {
  main: document.getElementById("real_container"),
  aboutme: document.getElementById("about-me"),
  projects: document.getElementById("container--projects") 
}


async function main(){

  projectsjson = await fetch("portfolio.json");
  projectsjson = await projectsjson.json();
  load_project_page();

  const button_container = document.getElementById('real_container');

  for (let i = 0; i < button_container.children.length; i++) {
    const child = button_container.children[i];

    if (i!=0)
      child.addEventListener('click', () => {
        currentpage = i;
        onpagechange();
      })

  }
}


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function goToMenu(){
  currentpage = 0;
  onpagechange();
}


function left_project(){
  projects_page = Math.abs((projects_page - 1) % projectsjson.length);
  load_project_page();
}


function right_project(){
  projects_page = Math.abs((projects_page + 1) % projectsjson.length);
  load_project_page();
}


function onpagechange(){

  if (running)
    return;
  running = true;

  toggle_element(menus[currentindx], false);

  switch (currentpage) {
    case 0:
      toggle_element(menus.main, true);
      currentindx = "main";
      break;
    
    case 1:
      toggle_element(menus.aboutme, true);
      currentindx = "aboutme";
      break;
    
    case 2:
      toggle_element(menus.projects, true);
      currentindx = "projects";
      break;
    
  }
  
}


async function toggle_element(element, on){

  if (on){
    element.style.visibility = 'visible';  
    element.style.opacity = 1; 
    await wait(1000);
  }
  else{
    element.style.opacity = 0; 
    await wait(1000);
    element.style.visibility = 'hidden';  
  }

  running = false;
}


function load_project_page(){
  document.getElementById("project_title").innerHTML =  projectsjson[projects_page].title;
  document.getElementById("project_desc").innerHTML =  projectsjson[projects_page].desc;
  document.getElementById("project_video").src =  projectsjson[projects_page].url;
  document.getElementById("project_page_count").innerHTML =  "Page " + (projects_page + 1) + "/" + projectsjson.length;
}

main();
