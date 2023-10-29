const { DDECREMENT, DINCREMENT } = require("../dynamicCounter/actionType");

const {INCREMENT} =require("../../redux/actionType")
const initialState = {
  count: 0,
};

const dynamicReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
      case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

module.exports = dynamicReducer;
