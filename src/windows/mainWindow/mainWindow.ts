const { BrowserWindow } = require('electron')
let win 

const mainWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
      width: 800,
      height: 600,
    })
  
    // and load the index.html of the app.
  if (process.env.NODE_ENV === 'development')
    win.loadURL('http://localhost:3000')
  else {
    win.loadFile('index.html')
  }
  
  
  
    // Emitted when the window is closed.
    win.on('closed', () => {
      win = null
    })
  }

export default mainWindow