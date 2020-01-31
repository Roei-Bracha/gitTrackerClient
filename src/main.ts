import mainWindow from "./windows/mainWindow/mainWindow"
import Tray from './windows/tray/Tray'
const { app } = require('electron')


app.on('ready', mainWindow)