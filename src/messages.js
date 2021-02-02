function message_creation(text) {
  if (text == null) text = "";
  let div = document.createElement("div");
  let message = document.getElementById("input").value;
  let message_height = document.getElementById("input").style.height;
  console.log(message_height);
  let id = Date.now(),
    text_id = (id + 1).toString();

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var min = today.getMinutes();
  var hours = today.getHours();
  var today = dd + "." + mm + "." + yyyy + " в " + hours + ":" + min;

  div.innerHTML =
    '<div class="message" id="' +
    id +
    '"><img src="img/avatar.png" style="margin-right: 15px;" height="48px">' +
    '<div><div style="display: flex;"><h6 class="message_text">Вы написали</h6><h9 class="date">' +
    today +
    '</h9></div><textarea id="' +
    text_id +
    '" readonly="true" style="overflow: hidden; border: 0; outline-width: 0; background-color: transparent; color: white; resize: none; font-size: 0.9em;">' +
    message +
    text +
    "</textarea></div></div>";
  let chat = document.getElementById("message_box");
  if (message != "" || text != "") {
    chat.append(div);
    document.getElementById(text_id).style.height = message_height;
  }
  document.getElementById("input").value = "";
  document.getElementById("input").style.height = "25px";
}

function first_message() {
  message_creation("Всем привет, давно не писал сюда! :)");
  message_creation("Чем занимаетесь?");
}

$("#input").on("input", function (e) {
  this.style.height = "0px";

  this.style.height = this.scrollHeight + 0 + "px";
});
