# Online-Portfolio
This is my Online Portfolio I made from Scratch using NodeJS, HTML, CSS and Bootstrap.

### To Run the APP
To run the app you need to install the node_modules by typing npm install in the project, then run it by typing ```node app-server.js```

### To Run Cypress
Before you run Cypress you need to make sure the app is running.
To run Cypress to need to type ```npm run cypress:open``` and then choose the test for want to run.
To run Cypress in the command line you need to type ```npm run cypress:run``` which will run all the tests.

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Davids-Stuff/Online-Portfolio)

### To Run Percy
To run Percy you need to make sure that the app is running.
Then you need to export the Percy token in the ENV variables, if you are using Windows you have to type set instead of export.
Then you need to run ```npx percy exec -- cypress run```