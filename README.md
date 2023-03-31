## Overview

This project contains scaffolding for a simple full stack web app.

## Development

### Project Structure

- `src/client` contains the [React](https://reactjs.org/) app
- `src/server` contains the [Node](https://nodejs.org/) [Express.js](https://expressjs.com/) app
- `package.json` in the project root contains scripts to run in dev mode locally, and also to build and run on Heroku

### Local Dev Setup

All commands run from project root:

1. `cd src/client && npm install`
2. `cd src/server && npm install`
3. Make sure `nodemon` & `concurrently` are installed globally
4. `npm run dev`

You will now see the output of both the React dev server and the Node server in your shell, running at the same time thanks to `concurrently`. Enjoy!

### Client<->Server Communication

The Node Express.js server is initialized with one router mounted at `/api`. We've implemented a sample route at `/api/users`. Edit the `src/server/routes/api.js` file to add your own routes and server-side logic.

In the React app, you can see in `src/client/src/App.jsx` where we're calling `/api/users` using `fetch`. `App.jsx` is a [functional component](https://reactjs.org/docs/components-and-props.html#function-and-class-components), so you can see how we're using `useEffect` to call our API on component mount, and `useState` to update component state when we receive a response from the API.