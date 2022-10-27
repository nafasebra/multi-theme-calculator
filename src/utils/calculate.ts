import { CalculateType } from "../reducers";

export function Sum(state: CalculateType) {
  if (state.firstNumber !== "0") {
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
      firstNumber: sumNumbers.toString(),
      display: sumNumbers.toString(),
    };
  }
  return state;
}

export function Minus(state: CalculateType) {
  if (state.firstNumber !== "0") {
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
      firstNumber: minusNumbers.toString(),
      display: minusNumbers.toString(),
    };
  }
  return state;
}

export function Multiply(state: CalculateType) {
  if (state.firstNumber !== "0") {
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
      firstNumber: multiplyNumbers.toString(),
      display: multiplyNumbers.toString(),
    };
  }
  return state;
}

export function Divide(state: CalculateType) {
  if (state.firstNumber !== "0") {
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
      firstNumber: divideNumbers.toString(),
      display: divideNumbers.toString(),
    };
  }
  return state;
}

export function Equal(state: CalculateType) {
  if (state.firstNumber !== "" && state.secondNumber !== "") {
    switch (state.operator) {
      case "+":
        return {
          ...state,
          operator: "",
          display: Number(state.firstNumber) + Number(state.secondNumber),
        };
      case "-":
        return {
          ...state,
          operator: "",
          display: Number(state.firstNumber) - Number(state.secondNumber),
        };
      case "*":
        return {
          ...state,
          operator: "",
          display: Number(state.firstNumber) * Number(state.secondNumber),
        };
      case "/":
        return {
          ...state,
          operator: "",
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
