function chat_creation(text) {
  if (text == null) text = "";
  let div = document.createElement("div");
  let message = document.getElementById("input2").value;
  div.innerHTML =
    '<div class="channel_item" id="' +
    Date.now() +
    '"> <div style="color: gray; width: 142px; margin-right: 3px;">' +
    message +
    text +
    '</div> <img src="img/chat.svg" width="15px" height="15px" style="filter: invert(1) brightness(0.5); margin-top: 6px"> </div>';
  let input2 = document.getElementById("chat_box");
  if (message != "" || text != "") input2.append(div);
  document.getElementById("input2").value = "";
}

function first_chats() {
  chat_creation("Переписка");
  chat_creation("Планы");
}
