# Tachyons webpack boilerplate

This is a basic webpack boilerplate to be used with Tachyons. You can write your javascript in `src/app.js` and add html and css to `index.html`.

## Installation

    git clone git@github.com:tachyons-css/tachyons-webpack.git
    cd tachyons-webpack
    npm install

## Development mode

Running `npm run dev` will run the __webpack-dev-server__ on port 3000. You can then develop and webpack will watch for file changes and
rebuild. Refreshing your browser will show the changes.

## Build

Running `npm run build` will create a `dist` folder with the `index.html`, `main.js` and `tachyons.css`
files for you to distribute or deploy
