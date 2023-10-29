const { store } = require("../redux/store");
const{increment , decrement} =require("../redux/action");
const{dincrement , ddecrement} = require("../redux/dynamicCounter/action")



store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment())
store.dispatch(increment())


