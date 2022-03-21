import "./CounterRedux.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  increaseCounterPlus5,
} from "./actions/counterActions";

function CounterRedux() {
  const count = useSelector((store) => store.counterReducer.count);

  const dispatchCounter = useDispatch();

  return (
    <div className="caja">
      <div className="Calculadora">
        <div className="Display">{count}</div>
        <div className="Botones">
          <button
            className="inc1"
            onClick={() =>
              count < 10
                ? dispatchCounter(increaseCounter(1))
                : alert("El número no puede superar el 10")
            }
          >
            Incrementa 1
          </button>
          <button
            className="dec1"
            onClick={() =>
              count > 0
                ? dispatchCounter(decreaseCounter(1))
                : alert("El número no puede bajar de 0")
            }
          >
            Decrementa 1
          </button>
          <button
            className="inc5"
            onClick={() =>
              count < 6
                ? dispatchCounter(increaseCounterPlus5(5))
                : alert("El número no puede superar el 10")
            }
          >
            Incrementa 5
          </button>
          <button
            className="clear"
            onClick={() => dispatchCounter(resetCounter())}
          >
            Resetea Contador
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterRedux;
