const electron = require('electron')
const path = require('path')
const freemap = require('freemap')

const { BrowserWindow, app } = electron
let win

app.setName('HyperDemo')
app.on('ready', function () {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL('file://' + path.join(__dirname, './index.html'))
  win.webContents.on('did-finish-load', () => win.webContents.openDevTools({ mode: 'detach' }))
})
