const path = require("path");
const url = require("url");
const { app, BrowserWindow, ipcMain } = require("electron");

let win, child;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: __dirname + "/img/icon.png",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    frame: false,
    titleBarStyle: "hidden",
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  win.on("closed", () => {
    win = null;
  });

  win.webContents.openDevTools();
}

app.on("ready", createWindow);

app.on("windows-all-closed", () => {
  app.quit();
});
