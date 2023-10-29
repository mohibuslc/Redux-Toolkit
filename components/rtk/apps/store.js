const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger"); // Import from "redux-logger" instead of "@reduxjs/toolkit"
const counterReducer = require("../feature/counter/counterSlice");
const dynamicCounterReducer = require("../feature/dCounter/dynamicSlice");

const logger = createLogger(); // Call createLogger to create a logger instance

const store = configureStore({

  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger) // Add the logger middleware
});

module.exports= store;

