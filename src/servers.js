function server_creation() {
  let div = document.createElement("div");
  div.innerHTML = '<img class="img" src="img/server.png">';
  let images = document.getElementById("images");
  images.append(div);
}

function first_servers() {
  for (i = 0; i < 3; i++) server_creation();
}

let k = 0;

function expand_narrow() {
  if (k % 2 == 0) {
    $("#panel").animate(
      {
        "min-width": "250px",
        "max-width": "250px",
      },
      200
    );
    $("#servers").animate(
      {
        opacity: "0",
      },
      100
    );
    $("#drop_right").animate(
      {
        "min-width": "250px",
        "max-width": "250px",
      },
      200
    );
  } else {
    $("#panel").animate(
      {
        "min-width": "60px",
        "max-width": "60px",
      },
      200
    );
    $("#servers").animate(
      {
        opacity: "1",
      },
      100
    );
    $("#drop_right").animate(
      {
        "min-width": "60px",
        "max-width": "60px",
      },
      200
    );
    document.getElementById("points").innerHTML = "";
  }
  k++;
}

$("#drop_right").width($("#panel").width());
