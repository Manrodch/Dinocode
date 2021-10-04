let dinoWarriorList = [];
// .JASON CALL
$(document).ready(function () {
  $.getJSON("./data/dinoWarriors.json", (data, state) => {
    dinoWarriorList = data.dinoWarriors;

    if (state !== "success") {
      console.log("alert" + state);
      return;
    }

    //SELECTION BUTTON  DINOWARRIORS PLAYER ONE

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
      //CARD DRAWING OF PLAYER ONE DINO WARRIOR
      $(".cardDesignPlayerOne").html(`
        <img src=${playerOne.image} width="300px" alt="imágen de ${playerOne.name}"/>
        <div>
        <h3>Name: ${playerOne.name}</h3>
        <h2>fight Style: ${playerOne.fightStyle}</h2>
        <h2>Genetic: ${playerOne.genetic}</h2>
        <h2>Age:${playerOne.age}</h2>
        <h2>Strength: ${playerOne.strength}</h2>
        <button id="confirmP1">Confirm</button>
        </div>`);

      //CONFIRM PLAYER ONE BUTTON
      $("#confirmP1").on("click", function () {
        console.log(playerOne.strength);
        localStorage.setItem(`P1Strength`, playerOne.strength);
      });
    });

    // SELECTION BUTTON  DINOWARRIORS PLAYER ONE

    for (dino of data.dinoWarriors) {
      $(".dinoPanelSelection2").append(`
      <div>
      <img src="${dino.image}" width="100" alt="imágen de ${dino.name}" />
      <button id="ani" class="dinoPlayerTwo">${dino.name}</button>
      </div>
      `);
    }

    //CARD DRAWING OF PLAYER ONE DINO WARRIOR

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
        <button id="confirmP2">Confirm</button>
        </div>`);
      //CONFIRM PLAYER ONE BUTTON
      $("#confirmP2").on("click", function () {
        console.log(playertwo.strength);
        localStorage.setItem(`P2Strength`, playertwo.strength);
      });
    });
  });

  // FIGHT BUTTON FUNCTION

  $(".fight").on("click", function () {
    let P1confirmed = localStorage.getItem(`P1Strength`);
    let P2confirmed = localStorage.getItem(`P2Strength`);
    console.log("Fuerza de player one" + " " + P1confirmed);
    console.log("Fuerza de player two" + " " + P2confirmed);

    if (P1confirmed == P2confirmed) {
      alert("It´s a draw");
    } else if (P1confirmed > P2confirmed) {
      alert(" player One wins");
    } else if (P2confirmed > P1confirmed) {
      alert(" player Two wins");
    } else;
  });
});
