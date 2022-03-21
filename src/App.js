import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  increaseCounterPlus5,
} from "./actions/counterActions";

function App() {
  const count = useSelector((store) => store.counterReducer.count);

  const dispatchCounter = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button
          onClick={() =>
            count < 10
              ? dispatchCounter(increaseCounter(1))
              : alert("El número no puede superar el 10")
          }
        >
          Increase counter
        </button>
        <button
          onClick={() =>
            count > 0
              ? dispatchCounter(decreaseCounter(1))
              : alert("El número no puede bajar de 0")
          }
        >
          Decrease counter
        </button>
        <button
          onClick={() =>
            count < 10
              ? dispatchCounter(increaseCounterPlus5(5))
              : alert("El número no puede superar el 10")
          }
        >
          Increase counter +5
        </button>
        <button onClick={() => dispatchCounter(resetCounter())}>
          Reset counter
        </button>
      </header>
    </div>
  );
}

export default App;
