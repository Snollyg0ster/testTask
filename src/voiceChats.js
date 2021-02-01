function voice_channel_creation(text) {
  if (text == null) text = "";
  let div = document.createElement("div");
  let message = document.getElementById("input1").value;
  div.innerHTML =
    '<div class="channel_item" id="' +
    Date.now() +
    '"> <div class="channel_item_text">' +
    message +
    text +
    '</div> <img src="img/voice.svg" style="filter: invert(1) brightness(0.5);"> </div>';
  let input1 = document.getElementById("voice_box");
  if (message != "" || text != "") input1.append(div);
  document.getElementById("input1").value = "";
}

function first_voice() {
  voice_channel_creation("Игровой");
  voice_channel_creation("Философский");
}
