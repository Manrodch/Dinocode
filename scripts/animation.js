//cargamos el dom +
$(function () {
  $("#DinoBoxerButton").click(() => $("#container").fadeIn());
  $("#DinoBoxerButton2").click(() => $("#container").fadeOut());
  $("#DinoSumoButton").click(() => $("#container").fadeIn());
  $("#DinoSumoButton2").click(() => $("#container").fadeOut());
});
