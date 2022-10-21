import { CalculateType } from "../reducers";

export function Sum(state: CalculateType) {
  if (state.operator === "") {
    return {
      ...state,
      operator: "+",
    };
  }
  let sumNumbers: number =
    Number(state.firstNumber) + Number(state.secondNumber);
  return {
    ...state,
    firstNumber: sumNumbers,
    display: sumNumbers,
  };
}

export function Minus(state: CalculateType) {
  if (state.operator === "") {
    return {
      ...state,
      operator: "-",
    };
  }
  let minusNumbers: number =
    Number(state.firstNumber) - Number(state.secondNumber);
  return {
    ...state,
    firstNumber: minusNumbers,
    display: minusNumbers,
  };
}

export function Multiply(state: CalculateType) {
  if (state.operator === "") {
    return {
      ...state,
      operator: "*",
    };
  }
  let multiplyNumbers: number =
    Number(state.firstNumber) * Number(state.secondNumber);
  return {
    ...state,
    firstNumber: multiplyNumbers,
    display: multiplyNumbers,
  };
}

export function Divide(state: CalculateType) {
  if (state.operator === "") {
    return {
      ...state,
      operator: "/",
    };
  }
  let divideNumbers: number =
    Number(state.firstNumber) / Number(state.secondNumber);
  return {
    ...state,
    firstNumber: divideNumbers,
    display: divideNumbers,
  };
}

export function Equal(state: CalculateType) {
  if (state.firstNumber !== "" && state.secondNumber !== "") {
    switch (state.operator) {
      case "+":
        return {
          ...state,
          display: Number(state.firstNumber) + Number(state.secondNumber),
        };
      case "-":
        return {
          ...state,
          display: Number(state.firstNumber) - Number(state.secondNumber),
        };
      case "*":
        return {
          ...state,
          display: Number(state.firstNumber) * Number(state.secondNumber),
        };
      case "/":
        return {
          ...state,
          display: (
            Number(state.firstNumber) / Number(state.secondNumber)
          ).toFixed(10),
        };
      default:
        return state;
    }
  }
  return state;
}
