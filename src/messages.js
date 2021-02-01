function message_creation(text) {
  if (text == null) text = "";
  let div = document.createElement("div");
  let message = document.getElementById("input").value;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var min = today.getMinutes();
  var hours = today.getHours();
  var today = dd + "." + mm + "." + yyyy + " в " + hours + ":" + min;

  div.innerHTML =
    '<div class="message" id="' +
    Date.now() +
    '"><img src="img/avatar.png" style="margin-right: 15px;" height="64">' +
    '<div><div style="display: flex;"><h5 class="message_text">Вы написали</h5><h8 class="date">' +
    today +
    '</h8></div><h6 style="font-family: Arial, Helvetica, sans-serif;">' +
    message +
    text +
    "</h6></div></div>";
  let chat = document.getElementById("message_box");
  if (message != "" || text != "") chat.append(div);
  document.getElementById("input").value = "";
}

function first_message() {
  message_creation("Всем привет, давно не писал сюда! :)");
  message_creation("Чем занимаетесь?");
}
