let friends_online = [
  { name: "Apollon", key: "1", img: "apollon" },
  { name: "Root", key: "2", img: "root" },
  { name: "Георгий Герасимов", key: "3", img: "geo" },
];
let friends_offline = [{ name: "Денис Свистун", key: "4", img: "svist" }];

function set_online() {
  friends_online.map((obj) => {
    let div = document.createElement("div");
    div.innerHTML =
      '<div id="' +
      obj.key +
      '" style="display: flex; margin-top: 15px; align-items: center;"> <img src="img/' +
      obj.img +
      '.png" width="40" height="40" style="margin-right: 10px;"> <div>' +
      obj.name +
      "</div> </div>";
    let online = document.getElementById("fonline");
    online.append(div);
  });
}

function set_offline() {
  friends_offline.map((obj) => {
    let div = document.createElement("div");
    div.innerHTML =
      '<div id="' +
      obj.key +
      '" style="display: flex; margin-top: 15px; align-items: center;"> <img src="img/' +
      obj.img +
      '.png" width="40" height="40" style="margin-right: 10px;"> <div>' +
      obj.name +
      "</div> </div>";
    let offline = document.getElementById("foffline");
    offline.append(div);
  });
}
