function voice_channel_creation(text) {
  if (text == null) text = "";
  let div = document.createElement("div");
  let message = document.getElementById("input1").value;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var today = dd + "." + mm + "." + yyyy;

  div.innerHTML =
    '<div style="display: flex; margin-top: 15px;" id="' +
    Date.now() +
    '"> <div style="color: gray; width: 142px; margin-right: 3px;">' +
    message +
    text +
    '</div> <img src="img/voice.svg"> </div>';
  let input1 = document.getElementById("voice_box");
  if (message != "" || text != "") input1.append(div);
  document.getElementById("input1").value = "";
}

function first_voice() {
  voice_channel_creation("Игровой");
  voice_channel_creation("Философский");
}
