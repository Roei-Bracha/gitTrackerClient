const electron = require('electron');
const { Tray, Menu } = electron;

const TrayCreator = ():void => {
    let appIcon = null
    appIcon = new Tray('./icon.png');
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
      ])
      appIcon.setToolTip('This is my application.')
      appIcon.setContextMenu(contextMenu)
}

export default TrayCreator