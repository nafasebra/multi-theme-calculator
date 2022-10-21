export enum CalculateAction {
  REMOVE_LAST_CHAR = "REMOVE_LAST_CHAR",
  RESET = "RESET",
  ADD_TO_DISPLAY = "ADD_TO_DISPLAY",
  SUM_OPERATOR = "SUM_OPERATOR",
  MINUS_OPERATOR = "MINUS_OPERATOR",
  DIVIDE_OPERATOR = "DIVIDE_OPERATOR",
  MULTIPLY_OPERATOR = "MULTIPLY_OPERATOR",
  EQUAL_TO = "EQUAL_TO",
}

export type CalculateType = {
  firstNumber: string;
  secondNumber: string;
  operator: string;
  display: string;
};

interface CalculateActionType {
  type: CalculateAction;
  payload: CalculateType | string;
}

export const initialState: CalculateType = {
  firstNumber: "0",
  secondNumber: "0",
  operator: "",
  display: "0",
};

export function reducer(state = initialState, action: CalculateActionType) {
  const { type, payload } = action;
  const { display, operator } = state;

  switch (type) {
    case CalculateAction.REMOVE_LAST_CHAR:
      return {
        ...state,
        display:
          display.length > 1 ? display.slice(0, display.length - 1) : "0",
      };
    case CalculateAction.RESET:
      return {
        firstNumber: "0",
        secondNumber: "0",
        operator: "",
        display: "0",
      };
    case CalculateAction.ADD_TO_DISPLAY:
      let displaiedNumber = display === "0" ? payload : display + payload
      return {
        ...state,
        firstNumber: operator === "" ? displaiedNumber : "",
        display: displaiedNumber,
        secondNumber: operator !== "" ? displaiedNumber : "",
      };
    case CalculateAction.SUM_OPERATOR:
      sum(state);
    case CalculateAction.MINUS_OPERATOR:
      minus(state);
    case CalculateAction.DIVIDE_OPERATOR:
      divide(state);
    case CalculateAction.MULTIPLY_OPERATOR:
      multiply(state);
    case CalculateAction.EQUAL_TO:
      equal(state);
    default:
      return state;
  }
}


function sum(state: CalculateType) {
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

function minus(state: CalculateType) {
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

function multiply(state: CalculateType) {
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

function divide(state: CalculateType) {
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

function equal(state: CalculateType) {
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
