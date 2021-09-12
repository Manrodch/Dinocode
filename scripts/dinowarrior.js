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
    console.log(
      "Selected warrior: " +
        this.character +
        this.fightStyle +
        this.genetic +
        this.age
    );
  }
}

$(document).ready(function () {
  $("#DinoBoxerButton").on("click", function () {
    let dinoBoxer = new dinoWarrior("DinoBoxer", "Jungle Box", "Male", "35");
    dinoBoxer.view();
  });
});
