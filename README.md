# React-State-Demo

A simple demo illustrating the usage of states and the principle of lifting
state up with React 5.

## Running the project

- Clone this project
- Install npm
- Enter the top-level project directory
- Run `npm i` to install the necessary dependencies
- Run `npm start` to run a server to create and populate the `/build` folder.
  Feel free to terminate this program when it's generated the files.
- Open `/build/index.html` in your browser (tested on DuckDuckGo)

## About the project

- This project is built on a stripped-down version of my [boilerplate](https://github.com/Anonymous-Humanoid/chromium-extension-boilerplate).
  As such, not everything is strictly necessary for this demo.
- Code prettification is available by running `npm run prettier`
- Nodemon and webpack-dev-server are used to create a near-seamless development
  experience with hot reloading. With most files, save your changes while
  `npm start` is running and webpack-dev-server will automatically save them to
  the `/build` folder. Whenever a Webpack or webpack-dev-server configuration
  file is modified, Nodemon will reload the server. Modifying a Nodemon config file
  requires a manual restart by typing `rs` into the console and hitting enter.
- React hot loading is not currently supported, as this is just a small demo
- This project supports NodeJS (through NPM), TypeScript, React, Webpack, Babel,
  ESlint, markdownlLint, webhint, webpack-dev-server, Nodemon, HTML, CSS and Prettier.
- For JavaScript users not wanting to deal with TypeScript, use .js and .jsx instead
  of the .ts and .tsx file extensions used here. To migrate TS to JS, change the
  file extensions and remove all the typings and interfaces from the code.
