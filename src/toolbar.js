const { remote } = require("electron");

function minimize() {
  let win = remote.getCurrentWindow();
  win.minimize();
}

function maximize() {
  let win = remote.getCurrentWindow();
  if (win.isMaximized()) win.restore();
  else win.maximize();
}

function closing() {
  console.log("hejkfhjkdf");
  let win = remote.getCurrentWindow();
  win.close();
}
