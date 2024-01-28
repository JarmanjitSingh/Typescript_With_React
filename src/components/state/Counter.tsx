import { useReducer } from "react";

type CounterType = {
  count: number;
};

// type CounterActionType = {
//   type: "increment" | "decrement" | "reset";
//   payload: number;
// };


///////// Bette way 

type UpdateAction = {
    type: "increment" | "decrement",
    payload: number
}

type ResetAction = {
    type: "reset"
}

type CounterActionType = UpdateAction | ResetAction 
// This is descremenated union in typescript

const initialState = { count: 0 };

function reducer(state: CounterType, action: CounterActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}{" "}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
