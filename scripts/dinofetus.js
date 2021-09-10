const dinoList = [];

let counter = 0;

class dinofetus {
  constructor(id, dinoName, genetic, race, strength) {
    this.id = id;
    this.dinoName = dinoName;
    this.genetic = genetic;
    this.race = race;
    this.strength = strength;
  }

  toString() {
    return JSON.stringify(this);
  }
}

$(document).ready(function () {
  $("#button").on("click", function () {
    let dinoName = $("#dinoName");
    let genetic = $("#genetic");
    let race = $("#race");
    let strength = $("#strength");

    if (
      (dinoName.val() && genetic.val() && race.val() && strength.val()) == ""
    ) {
      alert("Please, add complete data");
      return;
    }

    console.log(
      ` Dino Name: ${dinoName.val()} \n Genetic: ${genetic.val()} \n Race: ${race.val()} \n Strength: ${strength.val()} `
    );

    /* pushing new dino into dinoList */
    dinoList.push(
      new dinofetus(
        ++counter,
        dinoName.val(),
        genetic.val(),
        race.val(),
        strength.val()
      )
    );

    $("#dino-table").append(
      `<tr><td> ${counter} \n <td> ${dinoName.val()} \n <td> ${genetic.val()} \n <td> ${race.val()} \n <td> ${strength.val()}</tr> `
    );

    // value cleaning
    dinoName.val("");
    genetic.val("");
    race.val("");
    strength.val("");
  });

  $("#savebutton").on("click", function () {
    localStorage.setItem("Dino List", JSON.stringify(dinoList));
    console.log("Data saved succesfully" + dinoList.length + " Dino Fetus:");
    for (dinofetus of dinoList) console.log(dinofetus.toString());
  });
});
