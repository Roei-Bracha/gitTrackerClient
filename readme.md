# git tacker client

## about it
this client is written in typescript using electronjs
made of two parts:

 - the gui - electron application on the dock that let the user choose the directories he want the tracker to track and send notifications on changes.
 - the tracker - an event listener that check if any file was changed and update the server 

## developing
you will need 3 terminals:

 1. `npm start`  for running the electron and the watcher app or `npm run watch` for hot reload
 2. `npm run tsc-watch` to compile the typescript files to JavaScript
 3. `npm run client-dev` to work on the windows interfaces using react

