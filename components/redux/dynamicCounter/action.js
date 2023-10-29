const { DDECREMENT, DINCREMENT } = require("../dynamicCounter/actionType");

const dincrement = (payload) => {
  return {
    type: DINCREMENT,
    payload: payload,
  };
};

const ddecrement = (payload) => {
  return {
    type: DDECREMENT,
    payload: payload,
  };
};

module.exports = {
  dincrement,
  ddecrement
};
