let currentpage = 0;
let currentindx = "main";
let running = false;

const menus = {
  main: document.getElementById("real_container"),
  aboutme: document.getElementById("about-me"), 
}


function main(){

  const button_container = document.getElementById('real_container');

  for (let i = 0; i < button_container.children.length; i++) {
    const child = button_container.children[i];

    child.addEventListener('click', () => {
      currentpage = i + 1;
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


function onpagechange(){

  if (running)
    return;
  running = true;

  toggle_element(menus[currentindx], false);

  switch (currentpage) {
    case 0:
      toggle_element(menus.main, true);
      document.querySelector('h1').textContent = "Hello!";
      currentindx = "main";
      break;
    
    case 1:
      toggle_element(menus.aboutme, true);
      document.querySelector('h1').textContent = "About me!";
      currentindx = "aboutme";
      break;
    
    case 2:
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


main();