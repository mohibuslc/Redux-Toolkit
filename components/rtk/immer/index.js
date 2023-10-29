const { createStore } = require("redux");
const { produce } = require("immer");

const initialState = {
  name: "Mohammad Mohibur rahman",
  address: {
    city: "Sylhet",
    country: "Bangladesh",
    Road: "Uposhohor",
  },
};

// actionType
const updateStreet = "update_street";

// action
const update_street = (street) => {
  return {
    type: updateStreet,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case updateStreet: // Use the action type constant
      return produce(state, (draftState) => {
        draftState.address.street = action.payload;
      });
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(update_street("Jamal-pure")); // Dispatch the action using the action creator
