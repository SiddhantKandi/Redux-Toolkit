import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/state/store.ts";
import { decrement, increment,incrementByAmount,incrementWithAsync } from "../app/counter/counterSlice.ts";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-center">
      <h2 className="text-2xl mt-4 mb-5">Value of count is : {count}</h2>
      <button className="px-4 py-2 ml-4 bg-green-300 mr-4"
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
      <button
      className="px-4 py-2 ml-4 bg-green-400 mr-4"
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
      <button
      className="px-4 py-2 ml-4 bg-green-500 mr-4"
        onClick={() => {
          dispatch(incrementByAmount(Math.floor(Math.random() * 10) + 1))
        }}
      >
        Increment by 10
      </button>
      <button
      className="px-4 py-2 ml-4 bg-green-600 mr-4"
      onClick={() => {
        dispatch(incrementWithAsync(15))
      }}>
        Increment with Async by 10
      </button>
    </div>
  );
}

export default Counter;
