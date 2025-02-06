import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment : (state) => {    //As we are using createSlice it will make a copy and then update the state , if we do not use createSlice the then we have to do it manually,
        state.value +=1;
    },
    decrement : (state) => {
        state.value -= 1;
    }
  },
});


export const { increment, decrement } = counterSlice.actions;


export default counterSlice.reducer;
