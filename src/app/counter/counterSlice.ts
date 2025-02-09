import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

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
    increment: (state) => {
      //As we are using createSlice it will make a copy and then update the state , if we do not use createSlice the then we have to do it manually,
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers : (builder) => {
    builder.addCase(incrementWithAsync.pending, () => {
      console.log("Incrementing with Async using Redux Toolkit")
    }).addCase(incrementWithAsync.fulfilled, (state,action : PayloadAction<number>) => {
      state.value += action.payload;
    })
  }
});

export const incrementWithAsync = createAsyncThunk(
  "counter/incrementWithAsync",
  async (amount: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve,2000);
    })
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
