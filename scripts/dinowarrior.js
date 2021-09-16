const dinoWarriorList = [];

class dinoWarrior {
  constructor(name, fightStyle, genetic, age, strength) {
    this.character = {
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
  console.log(dinoBoxer.character);

  $("#DinoBoxerButton").on("click", function () {
    $("#dinoBoxerStats").append(
      `<img src="./images/dino-boxer.png" width="300px" alt=""/>
      <div>
      <h3>Name: ${dinoBoxer.character.name}</h3>
      <h2>fight Style: ${dinoBoxer.character.fightStyle}</h2>
      <h2>Genetic: ${dinoBoxer.character.genetic}</h2>
      <h2>Age:${dinoBoxer.character.age}</h2>
      <h2>Strength: ${dinoBoxer.character.strength}</h2>
      </div>
      `
    );
  });

  $("#DinoSumoButton").on("click", function () {
    $("#dinoSumoStats").append(
      `<img src="./images/dino-sumo.png" width="300px" alt=""/>
      <div>
      <h3>Name: ${dinoSumo.character.name}</h3>
      <h2>fight Style: ${dinoSumo.character.fightStyle}</h2>
      <h2>Genetic: ${dinoSumo.character.genetic}</h2>
      <h2>Age:${dinoSumo.character.age}</h2>
      <h2>Strength: ${dinoSumo.character.strength}</h2>
      </div>
      `
    );
  });
});
