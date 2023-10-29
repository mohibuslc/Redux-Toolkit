const store = require("./apps/store");
const {counterSliceActions} = require("./feature/counter/counterSlice")

store.subscribe(() => {
  console.log(`initailState of Counter:${JSON.stringify(store.getState())}`);
});

store.dispatch(counterSliceActions.increment());
store.dispatch(counterSliceActions.increment());
store.dispatch(counterSliceActions.increment());
store.dispatch(counterSliceActions.increment());
