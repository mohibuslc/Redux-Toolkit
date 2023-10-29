const { createStore, combineReducers } = require("redux");

const counterReducer = require("../redux/reducer");
const dynamicReducer =require("../redux/dynamicCounter/reducer")


const rootReducer = combineReducers({
  counter: counterReducer,
  Dynamic_Reducer: dynamicReducer

});

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

module.exports = {
  store,
};
