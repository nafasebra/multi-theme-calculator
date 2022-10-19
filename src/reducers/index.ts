export enum CalculateAction {
  ADD_FIRST_NUMBER = "ADD_FIRST_NUMBER",
  ADD_SECOND_NUMBER = "ADD_SECOND_NUMBER",
  REMOVE_LAST_CHAR = "REMOVE_LAST_CHAR",
  RESET = "RESET",
  ADD_TO_DISPLAY = "ADD_TO_DISPLAY",
  SUM_OPERATOR = "SUM_OPERATOR",
  MINUS_OPERATOR = "MINUS_OPERATOR",
  DIVIDE_OPERATOR = "DIVIDE_OPERATOR",
  MULTIPLY_OPERATOR = "MULTIPLY_OPERATOR",
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
  switch (type) {
    case "ADD_FIRST_NUMBER":
      return {
        ...state,
        firstNumber: payload,
      };
    case "ADD_SECOND_NUMBER":
      return {
        ...state,
        secondNumber: payload,
      };
    case "REMOVE_LAST_CHAR":
      return {
        ...state,
        display: state.display.slice(0, state.display.length - 2),
      };
    case "RESET":
      return {
        firstNumber: "0",
        secondNumber: "0",
        operator: "",
        display: "0",
      };
    case "ADD_TO_DISPLAY":
      return {
        ...state,
        display: state.display + payload
      };
    case "SUM_OPERATOR":
      return {
        ...state,
        operator: '+',
      };
    case "MINUS_OPERATOR":
      return {
        ...state,
        operator: '-',
      };
    case "DIVIDE_OPERATOR":
      return {
        ...state,
        operator: '/',
      };
    case "MULTIPLY_OPERATOR":
      return {
        ...state,
        operator: '*',
      };
  }
}
