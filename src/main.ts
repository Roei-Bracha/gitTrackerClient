import createMainWindow from "./windows/mainWindow/mainWindow"
import path from 'path'
import createTray from './windows/tray/Tray'
const { app, Tray } = require('electron')

let mainWindow;
let tray;

app.on('ready', ()=> {
    const iconName = process.platform === 'win32' ? 'winIcon16.ico' : 'icon@2x.png';
    const iconPath = path.join(__dirname, `windows/tray/${iconName}`);
    mainWindow = createMainWindow();
    tray = createTray(iconPath,mainWindow)
})
