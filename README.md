# Online-Portfolio
This is my Online Portfolio I made from Scratch using NodeJS, HTML, CSS and Bootstrap.

[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

### To Run the APP
To run the app you need to install the node_modules by typing ```npm install``` in the project, then run it by typing ```npm run local```. If this is your first time running the app you can also do ```npm run start``` which will install the Node Modules and run the app at the same time.

### To Run the APP on Docker
To run the app on Docker need to install docker on your machine which can be downloaded here: https://www.docker.com/products/docker-desktop. After you install Docker you need to build the container which can be done by running ```npm run docker:build```. Then you need to run the container by running ```npm run docker:run```. To close the container you need to run ```docker stop "containerID"```. You can find the containerID by running ```docker ps```.

### To Run Cypress
Before you run Cypress you need to make sure the app is running.
To run Cypress to need to type ```npm run cypress:open``` and then choose the test for want to run.
To run Cypress in the command line you need to type ```npm run cypress:run``` which will run all the tests.

[![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/hmdg5m/runs)

### To Run Percy
To run Percy you need to make sure that the app is running.
Then you need to export the Percy token in the ENV variables, if you are using Windows you have to type ```set PERCY_TOKEN=yourtoken```, for Mac ```export PERCY_TOKEN=yourtoken```.
Then you need to run ```npm run percy:run```.

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Davids-Stuff/Online-Portfolio)

### Running on CI
This project is running on CircleCI as a CI platform which you can learn more about CircleCI here: https://circleci.com/.

[![CircleCI](https://circleci.com/gh/Dhaigh94/Online-Portfolio.svg?style=shield)](https://circleci.com/gh/Dhaigh94/Online-Portfolio)

### Social Media
Here is some Social Media Channels you can follow me on.

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">https://www.flaticon.com/free-icon/facebook_1051258</a>https://www.facebook.com/david.haigh.104</div>
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">https://www.flaticon.com/free-icon/twitter_1409937</a>https://twitter.com/BugDevilDavid</div>
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">https://www.flaticon.com/free-icon/linkedin_1051282</a>https://www.linkedin.com/in/david-haigh-46161097/</div>
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">https://www.flaticon.com/free-icon/instagram_1409946</a>https://www.instagram.com/bugdevildavid/</div>
<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">https://www.flaticon.com/free-icon/github_270798?term=github&page=1&position=24</a>https://github.com/Dhaigh94</div>
<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">https://www.flaticon.com/free-icon/youtube_187210?term=youtube&page=1&position=56</a>https://www.youtube.com/channel/UCkJ0xOTmM3rXfSGj2xcsnLg</div>