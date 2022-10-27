import * as calculator from '../utils/calculate'

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
  const { display, operator, firstNumber, secondNumber } = state;

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
        firstNumber: operator === "" ? display : firstNumber,
        display: operator !== "" && firstNumber !== "0" && secondNumber === "0" ? "0" : displaiedNumber,
        secondNumber: operator !== "" ? display : secondNumber,
      };
    case CalculateAction.SUM_OPERATOR:
      return calculator.Sum(state);
    case CalculateAction.MINUS_OPERATOR:
      return calculator.Minus(state);
    case CalculateAction.DIVIDE_OPERATOR:
      return calculator.Divide(state);
    case CalculateAction.MULTIPLY_OPERATOR:
      return calculator.Multiply(state);
    case CalculateAction.EQUAL_TO:
      return calculator.Equal(state);
    default:
      return state;
  }
}


