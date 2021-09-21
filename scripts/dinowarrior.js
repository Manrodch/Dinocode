let dinoWarriorList = [];

class dinoWarrior {
  constructor(image, name, fightStyle, genetic, age, strength) {
    this.character = {
      image: image,
      name: name,
      fightStyle: fightStyle,
      genetic: genetic,
      age: age,
      strength: strength,
    };
  }
}
let dinoBoxer = new dinoWarrior(
  "Rockysaur",
  "Jungle Box",
  "Male",
  "35",
  "45000 kisaurus"
);
let dinoSumo = new dinoWarrior(
  "Yokoceratops",
  "Desert Sumo",
  "Male",
  "50",
  "80000 kisaurus"
);

$(document).ready(function () {
  $.getJSON("./data/dinoWarriors.json", (data, state) => {
    dinoWarriorList = data.dinoWarriors;

    if (state !== "success") {
      console.log("alert" + state);
      return;
    }

    for (dino of data.dinoWarriors) {
      $(".dinoPanelSelection").append(`
      <div >
      <img src="${dino.image}" width="100" alt="imágen de ${dino.name}" />
      <button id="ani" class="dino-selected">${dino.name}</button>
      </div>
      `);
    }

    $(".dino-selected").on("click", function () {
      let dinoSelected = dinoWarriorList.find(
        (dino) => dino.name == this.innerText
      );

      $(".cardDesign").html(`
      <img src=${dinoSelected.image} width="300px" alt="imágen de ${dinoSelected.name}"/>
      <div>
      <h3>Name: ${dinoSelected.name}</h3>
      <h2>fight Style: ${dinoSelected.fightStyle}</h2>
      <h2>Genetic: ${dinoSelected.genetic}</h2>
      <h2>Age:${dinoSelected.age}</h2>
      <h2>Strength: ${dinoSelected.strength}</h2>
      </div>`);
    });
  });
});
