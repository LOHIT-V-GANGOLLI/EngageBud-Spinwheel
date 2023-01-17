# engageBud-spinwheel

## Vercel Deployment
[https://spin-wheel-game.vercel.app/](https://spin-wheel-game.vercel.app/)

## Available Scripts

Upon cloning this repo, in the project directory, you can run:

### `npm install`

This command shall install the required dependencies of the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

This shall start the JSON server.\
Open [http://localhost:5000/users](http://localhost:3000/users) to view the the values POST-ed by the API to the server, in your browser.

## REST API POST Request Demo

* Clone the repo to your local system using `git clone https://github.com/FreakyTalons/engageBud-spinwheel` .
* Run `npm install` to install the dependencies.
* In ./src/Components/EntryPage.js un-comment the lines 68->82, the block of code makes the POST request.
* Comment out line number 85.
* Run the command `npm run server` in the project directory to start the server.
* Run the command `npm start` to run the app in development mode, in a new terminal.
* _The code currently bypasses this API request._


