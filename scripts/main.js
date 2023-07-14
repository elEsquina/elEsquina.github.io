async function generate(){
  
  const container = document.getElementById("portfolio-container");

  let myJson = await fetch("portfolio.json");
  myJson = await myJson.json(); 

  for (let dict of myJson) {

    const entry = document.createElement("div");
    entry.className = "portfolio-entry";

    container.appendChild(entry);
    
    entry.innerHTML = `
      <h2>${dict.title}</h2>
      <img src="image.png">
      <p>${dict.paragraph}</p>
    `;

  }

}

//generate();
