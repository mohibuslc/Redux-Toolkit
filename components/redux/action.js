const { DECREMENT, INCREMENT } = require("../redux/actionType");

const increment = (payload) => {
  return {
    type: INCREMENT,
    payload: payload,
  };
};

const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload: payload,
  };
};

module.exports = {
  increment,
  decrement
};
