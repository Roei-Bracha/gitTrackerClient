const electron = require('electron');
const { Tray, app, Menu } = electron;

let tray : any = null
const createTray = (iconPath : string, mainWindow : any)=>{
    const onClick = (event: any, bounds: any)=>{
        const { x, y } = bounds;
        // Window height and width
        const { height, width } = mainWindow.getBounds();
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            const yPosition = process.platform === 'darwin' ? y : y - height;
            mainWindow.setBounds({
                x: x - width / 2,
                y: yPosition,
                height,
                width
            });
            mainWindow.show();
        }
    }
    tray = new Tray(iconPath)
    tray.setToolTip('Git tracker');
    tray.on('click', onClick);
    tray.on('right-click', ()=>{
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => app.quit()
            }
        ]);
        tray.popUpContextMenu(menuConfig);
    });

    return tray
}

export default createTray