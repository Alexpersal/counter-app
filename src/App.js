import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./actions/counterActions";

function App() {
  const count = useSelector((store) => store.counterReducer.count);

  const dispatchCounter = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={() => dispatchCounter(increaseCounter(1))}>
          Increase counter
        </button>
        <button onClick={() => dispatchCounter(decreaseCounter(1))}>
          Decrease counter
        </button>
        <button onClick={() => dispatchCounter(resetCounter())}>
          Reset counter
        </button>
      </header>
    </div>
  );
}

export default App;
