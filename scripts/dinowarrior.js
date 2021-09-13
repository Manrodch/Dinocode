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
  view() {
    console.log(this.character);
  }
}
let dinoBoxer = new dinoWarrior("Rockysaur", "Jungle Box", "Male", "35", "45");

$(document).ready(function () {
  $("#DinoBoxerButton").on("click", function () {
    $("#dinoBoxerStats").append(`<li>${dinoBoxer} `);
    dinoBoxer.view();
  });
});
