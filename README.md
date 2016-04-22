# Tachyons webpack boilerplate with browser-sync

This is a basic webpack boilerplate to be used with Tachyons. You can write your javascript in `src/app.js`m add html to `index.html` and
add custom css to `css/index.css`.

## Installation

    git clone git@github.com:tachyons-css/tachyons-webpack.git
    cd tachyons-webpack
    npm install

## Development mode

Running `npm run dev` will run the __webpack-dev-server__ on port 3000. You can then develop and webpack will watch for file changes and
rebuild. BrowserSync will refresh the page.

## Build

Running `npm run build` will create a `dist` folder with the `index.html`, `main.js`, `index.css` and `tachyons.css`
files for you to distribute or deploy
