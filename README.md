# BenchBnB- Frontend Tests

## Useful Docs
* http://redux.js.org/docs/recipes/WritingTests.html
* https://facebook.github.io/jest/docs/en/expect.html

---

## Agenda 
- Set up
- Practice
- Reducers
- Action Creators
- Async Action Creators

---

## Why test?
- Prevents fear of refactoring
- Documentation
- Catches potential bugs
- TDD

---

## Jest
- Jest
  - Facebook's JS testing framework
  - Great for React
  - Simple mocking of components, libraries, etc.

---

## Setup
- `npm install --save-dev jest`
- `npm install --save-dev redux-mock-store`
- Edit `package.json` to run jest when you run `npm test`
- Add `.babelrc` file

---

## .babelrc file
```
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

---

## Jest Test Naming Conventions
- Put in a folder `__tests__`
- Name it `#{file-being-tested}-test.js`

---

## Testing Redux
- Relatively simple
- Pure functions

---

## Reducers

```js
describe('BenchesReducer', () => {

  test('should initialize with an empty object as the default state', () => {
    // Your code here
  });

  // More code...
});
```

---

## Reducers(solution)
```js
test('should initialize with an empty object as the default state', () => {
  expect(BenchesReducer(undefined, {})).toEqual({});
});
```

---

## Reducers Part II
- use testUtil file

```js
describe('handling the RECEIVE_BENCHES action', () => {
    let action;

    beforeEach(() => {
      // Set up the action that will be passed into the reducer:
      // Your code here
    });

    test('should replace the state with the action\'s benches', () => {
      // Your code here
    });

    test('should not modify the old state', () => {
      // Your code here
    });
});
```

---

## Reducers Part II (Solution)
```js
beforeEach(() => {
  action = {
    type: BenchActions.RECEIVE_BENCHES,
    benches: testBenches,
  };
});

test('should replace the state with the action\'s benches', () => {
  const state = BenchesReducer(undefined, action);
  expect(state).toEqual(testBenches);
});

test('should not modify the old state', () => {
  let oldState = { 1: 'oldState' };
  BenchesReducer(oldState, action);
  expect(oldState).toEqual({ 1: 'oldState' });
});
```
---

## Async Action Creators
```js
test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
  // REFER TO REDUX TESTS DOCS
  // Set up expectedActions:
  // Your code here

  ApiUtil.fetchBenches = jest.fn(() => {
    return Promise.resolve(testBenches);
  });

  const store = mockStore({ benches: {} });

  return store.dispatch(actions.fetchBenches()).then(() => {
      // Your code here
  });
});
```

---

## Async Action Creators (Solution)
```js
test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {

  const expectedActions = [
    {
      type: actions.RECEIVE_BENCHES,
      benches: testBenches,
    }
  ];

  ApiUtil.fetchBenches = jest.fn(() => {
    return Promise.resolve(testBenches);
  });

  const store = mockStore({ benches: {} });

  return store.dispatch(actions.fetchBenches()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
```
---

## Testing React Components
- More difficult, not similar to rspec :(
  - [`Enzyme`](http://airbnb.io/enzyme/docs/api/) to the rescue!
- What to test:
  - Presentational & container components
  - Presence of other components, links, input fields, props
  - Interaction with site (clicking, typing, etc)
- Dependencies to be mocked
  - Action creators, other components
  - Create test instances of reducer, store, default state
- Shallow vs. Full DOM rendering

---

## Container-less Component
```js
test('minSeating filter defaults to the passed in props of minSeating', () => {
  // your code here
});

test('updates filter onChange', () => {
  // Your code here
});
```

---

## Container-less Component (Solution)
```js
test('minSeating filter defaults to the passed in props of minSeating', () => {
  expect(minSeatFilter.props().value)
    .toEqual(2);
});

test('updates filter onChange', () => {
  minSeatFilter.props().onChange({currentTarget: 3});
  expect(props.updateFilter.mock.calls.length).toBe(1);
});
```

---

## Container Component
- If the container component's child uses `withRouter`, then we'll need
to wrap the container component with a Router when mounting it.

```js
test('correctly maps dispatch to props', () => {
  // Your code here
});

test('pre-fills rating field to 5', () => {
  // Your code here
});

test('pre-fills comment field with empty string', () => {
  // Your code here
});

test('navigates to bench show on button click', () => {
 // Your code here
});
```

---

## Container Component (Solution)
```js
test('correctly maps dispatch to props', () => {
  expect(reviewFormWrapper.props().createReview).toBeDefined();
});

test('pre-fills rating field to 5', () => {
  expect(reviewRating.props().value).toEqual(5);
});

test('pre-fills comment field with empty string', () => {
  expect(reviewBody.props().value).toEqual('');
});

test('navigates to bench show on button click', () => {
  benchShowButton.simulate('click');
  expect(push).toBeCalledWith('/benches/undefined');
});
```

---

## Snapshot Testing
- Automates the updating of tests
- Saves a snapshot of how the component renders
- [Snapshot Testing](https://www.youtube.com/watch?v=HAuXJVI_bUs)

---

## Snapshot Testing
- Refer to enzyme-to-json docs

```js
test ('renders correctly', () => {
  // Snapshot testing here
});
```

---

## Snapshot Testing (Solution)

```js
test ('renders correctly', () => {
  expect(toJson(filterFormWrapper)).toMatchSnapshot();
});
```

---

## Snapshot

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`FilterForm renders correctly 1`] = `
<div>
  <span
    className="filter"
  >
    Filter results:
  </span>
  <br />
  <label>
    Minimum Seats
  </label>
  <input
    onChange={[Function]}
    type="number"
    value={2}
  />
  <br />
  <label>
    Maximum Seats
  </label>
  <input
    onChange={[Function]}
    type="number"
    value={5}
  />
</div>
`;
```

---

## Where To Go From Here
- Add tests to your FSP
- Add tests to JS project
- Add Jest and Enzyme to your resume
- Add tests whenever possible on coding challenges!

---
