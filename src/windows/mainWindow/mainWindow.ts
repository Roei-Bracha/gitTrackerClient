const { BrowserWindow } = require('electron')
let win : any

const createMainWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
      height: 500,
      width: 300,
      frame:false,
      resizable:false,
      show:false,
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
  win.on('blur',()=>{
    win.hide()
  })
  return win
  }


export default createMainWindow