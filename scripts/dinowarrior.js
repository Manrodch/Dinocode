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
      `<li> ${dinoBoxer.character.name} <li> ${dinoBoxer.character.fightStyle} <li>${dinoBoxer.character.genetic} <li>${dinoBoxer.character.age} <li>${dinoBoxer.character.strength} `
    );
  });
});
