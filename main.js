// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
    let mainWindow = new BrowserWindow({ width: 1400, height: 900, icon: './app/src/assets/rust.jpg' })

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    mainWindow.maximize();
})
