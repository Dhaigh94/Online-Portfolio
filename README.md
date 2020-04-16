# Online-Portfolio
This is my Online Portfolio I made from Scratch using NodeJS, HTML, CSS and Bootstrap.

![GitHub pull requests](https://img.shields.io/github/issues-pr/Dhaigh94/Online-Portfolio)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/Dhaigh94/Online-Portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/Dhaigh94/Online-Portfolio)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.davidhaighportfolio.com%2F)

### To Run the APP
To run the app you need to install the node_modules by typing ```npm install``` in the project, then run it by typing ```npm run local```. If this is your first time running the app you can also do ```npm run start``` which will install the Node Modules and run the app at the same time.

### To Run the APP on Docker
To run the app on Docker need to install docker on your machine which can be downloaded here: https://www.docker.com/products/docker-desktop. After you install Docker you need to build the container which can be done by running ```npm run docker:build```. Then you need to run the container by running ```npm run docker:run```. To close the container you need to run ```docker stop "containerID"```. You can find the containerID by running ```docker ps```.

### To Run Cypress
Before you run Cypress you need to make sure the app is running.
To run Cypress to need to type ```npm run cypress:open``` and then choose the test for want to run.
To run Cypress in the command line you need to type ```npm run cypress:run``` which will run all the tests.

### To Run Percy
To run Percy you need to make sure that the app is running.
Then you need to export the Percy token in the ENV variables, if you are using Windows you have to type ```set PERCY_TOKEN=yourtoken```, for Mac ```export PERCY_TOKEN=yourtoken```.
Then you need to run ```npm run percy:run```.

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Davids-Stuff/Online-Portfolio)

### Running on CI
This project is running on CircleCI as a CI platform which you can learn more about CircleCI here: https://circleci.com/.

[![CircleCI](https://circleci.com/gh/Dhaigh94/Online-Portfolio.svg?style=shield)](https://circleci.com/gh/Dhaigh94/Online-Portfolio)

### Social Media
Here is some Social Media buttons below you can follow me on.

[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&style=plastic)](https://twitter.com)
[![Twitter Follow](https://img.shields.io/twitter/follow/BugDevilDavid.svg?style=social)](https://twitter.com/BugDevilDavid)
![GitHub followers](https://img.shields.io/github/followers/Dhaigh94?style=social)
![GitHub forks](https://img.shields.io/github/forks/Dhaigh94/Online-Portfolio?style=social)
![GitHub stars](https://img.shields.io/github/stars/Dhaigh94/Online-Portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Dhaigh94/Online-Portfolio?style=social)