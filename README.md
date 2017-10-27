# BenchBnB- Frontend Tests

## Useful Docs
* http://redux.js.org/docs/recipes/WritingTests.html
* https://facebook.github.io/jest/docs/en/expect.html
* http://airbnb.io/enzyme/docs/api/
* https://facebook.github.io/jest/docs/en/mock-functions.html 
* https://www.npmjs.com/package/react-mock-router

## Setup
- `npm install --save-dev jest enzyme`
- `npm install --save-dev redux-mock-store`
- `npm install --save-dev react-test-renderer@15 enzyme-adapter-react-15`
- Add a `setUpTest.js file`
- Tell jest where to look for your `setUpTest.js` file in your `package.json`
- Update `package.json` 'test' script to run jest 
- Add a .babelrc file to transpile jsx and es6 code.
- `npm install --save-dev react-mock-router`
- `npm install --save-dev enzyme-to-json`