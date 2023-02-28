This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Table of Contents
1. [Available Scripts](#available-scripts)
2. [File Structure](#file-structure)
3. [Pages and Components](#pages-components)
4. [Styles](#styles)
5. [License](#license)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## File Structure
While the `Multi Level Accordion` does primarily rely on the standard file structure of a React.js project (anchored around the /pages directory), a few additions have been made. The following outlines the full structure of the `Multi Level Accordion`:

```
├── node_modules
├── public
|   ├── favicon.ico
|   ├── index.html
|   ├── manifest.json
|   ├── robots.txt
|   ├── logo192.png
|   └── logo512.png
├── src
|   ├── apis
|   |   └── getCategories.api.js
|   ├── assets
|   |   ├── fonts
|   |   ├── styles
|   |   |   └── globals.css
|   ├── components
|   |   ├── Accordion
|   |   |   ├── Accordion.component.js
|   |   |   └── Accordion.test.js
|   |   └── index.js
|   ├── config
|   |   └── variables.config.js
|   ├── mock
|   |   ├── apis
|   |   |   └── categories.js
|   |   ├── handlers.js
|   |   └── server.js
|   ├── pages
|   |   ├── Home
|   |   |   ├── Home.Page.js
|   |   |   └── Home.test.js
|   |   └── index.js
|   ├── services
|   |   └── http.service.js
|   ├── index.js
|   └── setupTests.js
├── .gitignore
├── jsconfig.js
├── package.json
├── package-lock.json
└── README.md
```
## Pages & Components
For components, there are two conventions in use: the `/pages` directory that index.js uses for rendering, and a custom directory components that contains a mix of React components used to build out the user interface.

## Styles
CSS styles are implemented in two ways in the `Multi Level Accordion`. Global styles (not page or component-specific styles) are implemented using React.js built-in CSS processing. These styles are located in the `src/asstes/styles` directory.

At the page and component-level, CSS styles are implemented using `SCSS Module`.

## License
Copyright © 2023 Pouya-Shekari