let dinoWarriorList = [];

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
      <button id="ani" class="dinoPlayerOne">${dino.name}</button>
      </div>
      `);
    }

    $(".dinoPlayerOne").on("click", function () {
      let playerOne = dinoWarriorList.find(
        (dino) => dino.name == this.innerText
      );

      $(".cardDesignPlayerOne").html(`
      <img src=${playerOne.image} width="300px" alt="imágen de ${playerOne.name}"/>
      <div>
      <h3>Name: ${playerOne.name}</h3>
      <h2>fight Style: ${playerOne.fightStyle}</h2>
      <h2>Genetic: ${playerOne.genetic}</h2>
      <h2>Age:${playerOne.age}</h2>
      <h2>Strength: ${playerOne.strength}</h2>
      </div>`);
    });

    for (dino of data.dinoWarriors) {
      $(".dinoPanelSelection2").append(`
      <div>
      <img src="${dino.image}" width="100" alt="imágen de ${dino.name}" />
      <button id="ani" class="dinoPlayerTwo">${dino.name}</button>
      </div>
      `);
    }

    $(".dinoPlayerTwo").on("click", function () {
      let playertwo = dinoWarriorList.find(
        (dino) => dino.name == this.innerText
      );

      $(".cardDesignPlayertwo").html(`
      <img src=${playertwo.image} width="300px" alt="imágen de ${playertwo.name}"/>
      <div>
      <h3>Name: ${playertwo.name}</h3>
      <h2>fight Style: ${playertwo.fightStyle}</h2>
      <h2>Genetic: ${playertwo.genetic}</h2>
      <h2>Age:${playertwo.age}</h2>
      <h2>Strength: ${playertwo.strength}</h2>
      </div>`);
    });
  });
});
