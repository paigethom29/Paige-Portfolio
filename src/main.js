import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
<<<<<<< HEAD
  "./Project 1 Small Images on Website/01.jpg",
  "./Project 1 Small Images on Website/02.jpg",
  "./Project 1 Small Images on Website/03.jpg",
  "./Project 1 Small Images on Website/04.jpg",
=======
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

<<<<<<< HEAD
const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

=======
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
<<<<<<< HEAD
      Project 1: Cadavre Exquis
        <div class="three-model">
          <img src="./Cadavre Equis Animation 1.png" id="model1" alt="model 1 
=======
      Model 1
        <div class="three-model">
          <div id="model1"></div>
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
<<<<<<< HEAD
          <h4 id="description">My Cadavre Exquis relates to how my innate and environmental-induced philosophies shape my worldly values and opinions. It explores the importance of fictional worlds, childlike imagination and creativity. All concepts that should be embraced in the professional world. It is this optimism that shows us of the joys of life and encourages us as designers to approach challenges with a reminder of what we are fighting for.</h4>
=======
          <h4 id="description">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
        </div>
      </div>

      <div id="project-row">
<<<<<<< HEAD
      ${/*Model 2
=======
      Model 2
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
        <div class="three-model">
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
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
<<<<<<< HEAD
      */""}

      ${/*
=======

>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
<<<<<<< HEAD
            ${houses
              .map(
                (house, index) =>
                  `<img src="${house}" alt="house${index + 1}" />`
=======
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
<<<<<<< HEAD
      */""}

=======
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
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
<<<<<<< HEAD
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
=======
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
>>>>>>> 81e5cd536696198d8d836180a19258c7ac018c6d
