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

$(document).ready(function () {
  console.log(dinoBoxer.character);
  $("#DinoBoxerButton").on("click", function () {
    $("#dinoBoxerStats").append(
      `<img src="./images/dino-boxer.png" width="300px" alt=""/>
      <div>
      <h2>Name: ${dinoBoxer.character.name}</h2>
      <h2>fight Style: ${dinoBoxer.character.fightStyle}</h2>
      <h2>Genetic: ${dinoBoxer.character.genetic}</h2>
      <h2>Age:${dinoBoxer.character.age}</h2>
      <h2>${dinoBoxer.character.strength}</h2>
      </div>
      `
    );
  });
});
