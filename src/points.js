const menuPoints = [
  { name: "Добавить аккаунт", key: "1", img: "addacc" },
  { name: "Создать группу", key: "2", img: "chatmake" },
  { name: "Создать канал", key: "3", img: "makechan" },
  { name: "Контакты", key: "4", img: "contacts" },
  { name: "Звонки", key: "5", img: "calls" },
];

function menu_points() {
  menuPoints.map((obj) => {
    let div = document.createElement("div");
    div.innerHTML =
      '<div id="' +
      obj.key +
      '" style="display: flex; margin-top: 15px; align-items: center;"> <img src="img/' +
      obj.img +
      '.png" width="32" height="32" style="margin-right: 10px;"> <div style="color: white;">' +
      obj.name +
      "</div> </div>";
    let points = document.getElementById("points");
    points.append(div);
  });
}
