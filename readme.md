# git tacker client

## about it
this client is written in typescript using electronjs
made of two parts:

 - the gui - electron application on the dock that let the user choose the directories he want the tracker to track and send notifications on changes.
 - the tracker - an event listener that check if any file was changed and update the server 

## developing
you will need 2 terminals:

 1. `npm start` or `npm run watch` for running the electron and the watcher app
 2. `npm run tsc-watch` to compile the typescript files to JavaScript

