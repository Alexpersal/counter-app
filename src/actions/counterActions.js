export const increaseCounter = (amount) => {
  return {
    type: "INCREASE_COUNTER",
    payload: amount,
  };
};

export const decreaseCounter = (amount) => {
  return {
    type: "DECREASE_COUNTER",
    payload: amount,
  };
};

export const increaseCounterPlus5 = (amount) => {
  return {
    type: "INCREASE_COUNTER_PLUS5",
    payload: amount,
  };
};

export const resetCounter = (amount) => {
  return {
    type: "RESET_COUNTER",
    payload: amount,
  };
};
