const { createSlice } = require("@reduxjs/toolkit");
const {counterSliceActions}=require("../counter/counterSlice.js")
const initialState = {
  count: 0,
};

const dycounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(counterSliceActions.increment, (state, action) => {
      state.count += 1;
    });
  },
});

module.exports = dycounterSlice.reducer;
module.exports.dycounterSliceActions = dycounterSlice.actions;
