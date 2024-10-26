# Red Alert Signin Doc Page #

the docs page for this react-express application project

## Dependencies ##
- 🛠Configurations
    * [npm](https://www.npmjs.com/) -> Package Manager
    * [create-react-app](https://create-react-app.dev/) -> React Project Configurator 
    * [jsdelivr](https://www.jsdelivr.com/)
    * [git](https://git-scm.com/) -> Version Control System
    * [github](https://github.com) -> Git Repository Hosting Platform

- 🖌️Frontend
    * [react](https://react.dev) -> Single Page Frontend Interface Bulding Library
    * [react-query](https://tanstack.com/query/latest) -> Data-fetching Library
    * [axios](https://axios-http.com/) -> Promise-based HTTP Client for REST APIs
    * [tailwindcss](https://tailwindcss.com/) -> Atomic-based CSS Framework
    * [bootstrap](https://getbootstrap.com/) -> CSS Class Components & Icons Provider

- 🔨Backend
    * [node.js](https://nodejs.org/en) -> JavaScript Runtime Environment
    * [express.js](https://expressjs.com/) ->  Minimalist Web Framework For Node.js to build APIs and server routes
    * [cors](https://www.npmjs.com/package/cors) -> Cross-Origin Resource Sharing Configurer
    * [path](https://www.npmjs.com/package/path) -> Directory Name Linker
    * [dotenv](https://www.npmjs.com/package/dotenv) -> .env File Variable Loader
    * [mongoose](https://mongoosejs.com/) -> Object Data Modeling Library for [MongoDB](https://www.mongodb.com/)
    * [node-schedule](https://www.npmjs.com/package/node-schedule) -> Flexible Cron-like and not-Cron-like job Scheduler for Node.js

## Layout ##

```shell
/app ->
    ├─ /node_modules
    ├─ /public ->
    │   └─ index.html
    ├─ /server ->
    │   ├─ .env
    │   ├─ cron.mjs
    │   ├─ db.mjs
    │   └─ server.mjs
    ├─ /src ->
    │   ├─ /assets ->
    │   │   └─ FRC SIGN IN.png
    │   ├─ /comps ->
    │   │   ├─ spinner.css
    │   │   └─ spinner.jsx
    │   ├─ /pages ->
    │   │   ├─ code.jsx
    │   │   └─ signin.jsx
    │   ├─ App.css
    │   ├─ App.js
    │   ├─ index.css
    │   └─ index.js
    ├─ .gitignore
    ├─ package-lock.json
    ├─ package.json
    ├─ README.md
    └─ tailwind.config.js
```

### /. ###
- root dir
* package-lock.json & package.json -> generated [npm](https://www.npmjs.com/) files containing imformation of the project like dependencies, etc
* README.md -> contains documentation on this project
* tailwind.config.js -> configuration file generated by [tailwindcss](https://tailwindcss.com/)

### /public ###
public contains the html file that the components would be rendered on

### /server ###
- server contains the backend
* .env -> contains the enviormental variables
* cron.mjs -> code for updating the access code, also incharge of updating it in a daily interval
* db.mjs -> code for the mongodb database, adds and updates users data
* server.mjs -> code for the express server, controls server side routes for apis

### /src ###
- src contains the frontend
* App.css -> css file for background
* App.js -> main component
* index.css -> global css file
* index.js -> renderer, handles react integrations with other frontend libraries

#### /src/assets ####
- contains .png
* FRC SIGN IN.png -> background image

#### /src/comps ####
- contains components to use in the pages
* spinner.css -> css for the spinner component
* spinner.jsx -> the spinner component, rendered when react-query is in the process of fetching a query

#### /src/pages ####
- contains the pages
* code.jsx -> page for getting the access code
* signin.jsx -> page for signin/login into

# Project Stats #
 📏size: 350 MB
 🗄️files: 43,112
 📁folders: 5,339
 </>code: 
    Javascript: 90.4%
    HTML: 6.2%
    CSS: 3.2%
    JSON: 0.2%
 ⏰time wasted: 3 weeks

![""](https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F9gwumjr5x5831.jpg)

made by "Sarthak Ghoshal"/[websitedeb](https://github.com/websitedeb) on behalf of "Red Alert Robotics 1741"/[RAR1741](https://github.com/RAR1741)