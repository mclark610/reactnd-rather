import combinedReducers from '../reducers';

test('reducers', () => {
  let state;
  state = combinedReducers(undefined, {});
  expect(state).toEqual({users:{},questions:{},authedUser:null,LoadingBar:{}});
});