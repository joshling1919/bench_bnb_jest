# BenchBnB- Frontend Tests

Useful Docs:
* http://redux.js.org/docs/recipes/WritingTests.html
* https://facebook.github.io/jest/docs/en/expect.html
* http://airbnb.io/enzyme/docs/api/
* https://facebook.github.io/jest/docs/en/mock-functions.html
* https://www.npmjs.com/package/react-mock-router

## Intro to Jest and Enzyme

### Why test?
- Prevents fear of refactoring
- Documentation
- Catches potential bugs
- TDD

### Jest and Enzyme

## Setup
- `npm install --save-dev jest enzyme`
- `npm install --save-dev redux-mock-store`
- `npm install --save-dev react-test-renderer@15 enzyme-adapter-react-15`
- Add a `setUpTest.js file`
- Tell jest where to look for your `setUpTest.js` file in your `package.json`
- `npm install --save-dev react-mock-router`
- `npm install --save-dev enzyme-to-json`

## Testing Redux

### Reducers

### Async Action Creators

## Testing React Components

### Container-less Component

### Container Component
- If the container component's child uses `withRouter`, then we'll need
to wrap the container component with a Router when mounting it.

## Snapshot Testing
