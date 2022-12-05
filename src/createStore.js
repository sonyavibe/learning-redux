export function createStore (rootReducer, initialState) {
  let state = rootReducer(initialState, {type: __INIT__});
  const subs = [];
  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subs.forEach(sub => sub());
    },
    subscribe(callback) {
      subs.push(callback);
    },
    getState() {
      return state;
    }
  }
}