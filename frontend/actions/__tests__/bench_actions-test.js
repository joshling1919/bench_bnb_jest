import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {

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

});
