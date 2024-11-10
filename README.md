# Webpack Express React Boilerplate
Boilerplate React app compiled by Webpack and served by ExpressJS.
Key built-in technologies include Webpack, Webpack-Merge, Handlebars, Express, and React

## Installation
Use Node package manager to install the boilerplate
```bash
npm install
```

## Development
Successful development mode compilation requires that the Webpack environment variable is set to 'development' and that the Node environment variable NODE_ENV is set to 'development'. This is written in the package.json file and should not be changed.
```bash
   "dev": "NODE_ENV=development webpack serve --config webpack.common.js --env development"
```

## Production
Successful production compilation requires that the Webpack environment variable is set to 'production' and that the Node environment variable NODE_ENV is set to production.
```bash
"build": "NODE_ENV=production webpack --config webpack.common.js"
```