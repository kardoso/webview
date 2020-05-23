const { app, BrowserWindow } = require("electron")
const config = require("./config")

let win;

function createWindow() {
  win = new BrowserWindow({
    window: 800,
    height: 600,
    titleBarStyle: 'hidden',
    alwaysOnTop: true,
    webPreferences: {
        nodeIntegration: true
    }
  })

  win.loadURL(config.url)
}

app.whenReady()
  .then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0){
    createWindow()
  }
})