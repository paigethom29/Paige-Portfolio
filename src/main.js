import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./Project 1 Small Images on Website/01.jpg",
  "./Project 1 Small Images on Website/02.jpg",
  "./Project 1 Small Images on Website/03.jpg",
  "./Project 1 Small Images on Website/04.jpg",
];

const trees = [
  "./Project 2 Small Images/01.png",
  "./Project 2 Small Images/02.png",
  "./Project 2 Small Images/03.png",
  "./Project 2 Small Images/04.png",
  "./Project 2 Small Images/05.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Project 1: Cadavre Exquis
        <div class="three-model">
          <img src="./Cadavre Equis Animation 1.png" id="model1" alt="model 1 
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">My Cadavre Exquis relates to how my innate and environmental-induced philosophies shape my worldly values and opinions. It explores the importance of fictional worlds, childlike imagination and creativity. All concepts that should be embraced in the professional world. It is this optimism that shows us of the joys of life and encourages us as designers to approach challenges with a reminder of what we are fighting for.</h4>
        </div>
      </div>

      <div id="project-row">
      Project 2: Interop(erability)
        <div class="three-model">
              <img src="./Screenshot 2025-02-02 225744.png"
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description"> THIS ASSIGNMENT SERVED TO STRENGTHEN MY CAPABILITIES WITHIN BOTH RHINO AND BLENDER BY GIVING ME THE CONFIDENCE TO UNDERSTAND AND PROPERLY USE DIFFERENT TYPES OF GEOMETRY. I NOW HAVE A GREATER UNDERSTANDING OF THE CAPABILITIES OF MESHES, SUBD’S AND NURBS AS WELL AS HOW TO BE EFFICIENT IN WORKING WITH THEM. SWITCHING FROM MESH TO NURBS definitely TAKES MORE COMPUTING POWER AND THEREFORE SLOWS THE WORKFLOW SIGNIFICANTLY. HOWEVER, I ALSO LEARNT THAT NURBS HAVE THE ABILITY TO PERFORM CERTAIN TASKS THAT OTHER GEOMETRIES CANNOT. A LARGE NUMBER OF MESHES ISN’T JUST HEAVY TO CALCULATE BUT USING SUBD’S OR NURBS ALSO PROVIDE SIMPLER FACES AND CONTROL POINTS TO MANIPULATE IN A MORE PRECISE FASHION. IT IS ALSO INTERESTING TO NOTE THE DIFFERENCES IN FILE SIZE, WHILE THE FIRST TWO OBJECTS WEREN’T VERY DIFFERENT IN THIS ASPECT THE FINAL OBJECT EXEMPLIFIED HOW MUCH FILE SIZE CAN EFFECT EFFICIENCY WHILE WORKING. I ALSO APPRECIATED THE OPPORTUNITY TO PHYSICALLY FABRICATE THE MODEL, AS IT HELPS ME AS A VERY TACTICAL PERSON UNDERSTAND HOW THE COMPUTER CALCULATES GEOMETRIES AND HOW THAT IS TRANSFERRED INTO THE PHYSICAL WORLD - SOMETHING THAT WILL BE VERY IMPORTANT TO UNDERSTAND FOR WHEN I ONE DAY HAVE A BUILT PROJECT.
        </div>
      </div>

      ${/*
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) =>
                  `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}

    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
