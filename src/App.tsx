import Counter from "./Components/Counter.tsx";

//Store {Variables global}

// interface CounterState {
//   value: number;
// }

// interface UserState {
//   isLoggedIn: boolean;
// }

//Action {What action to perform}

// const increamentByAmount = { type: "INCREMENT" };
// const decrementByAmount = { type: "DECTEMENT" };

//Reducer {Logic for the action}
//Works on the concept of Immutability 
//Never changes the original state at once , but makes a copy of the original state chnages the code and then changes the original state as a whole
 

function App() {
  return (
    <>
      <h1 className="text-center text-blue-500 mt-4 mb-10">React Redux Tutorial</h1>
      <Counter />
    </>
  );
}

export default App;
