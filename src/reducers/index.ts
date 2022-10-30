import * as calculator from "../utils/calculate";

export enum CalculateAction {
  REMOVE_LAST_CHAR = "REMOVE_LAST_CHAR",
  RESET = "RESET",
  ADD_TO_DISPLAY = "ADD_TO_DISPLAY",
  OPERATION = "OPERATION",
  EQUAL_TO = "EQUAL_TO",
}

export type CalculateType = {
  number: string;
  operator: string;
  display: string;
};

interface CalculateActionType {
  type: CalculateAction;
  payload: CalculateType | string;
}

export const initialState: CalculateType = {
  number: "0",
  operator: "",
  display: "0",
};

export function reducer(state = initialState, action: CalculateActionType) {
  const { type, payload } = action;
  const { display, operator, number } = state;

  switch (type) {
    case CalculateAction.REMOVE_LAST_CHAR:
      return {
        ...state,
        number:
          number.length > 1 ? number.slice(0, number.length - 1) : "0",
      };
    case CalculateAction.RESET:
      return {
        number: "0",
        operator: "",
        display: "0",
      };
    case CalculateAction.ADD_TO_DISPLAY:
      let ResultDisplay = display == "0" ? payload : display + payload;
      let ResultNumber = number == "0" ? payload : number + payload;
      return {
        ...state,
        number: number === "0" && payload === "0" ? "0" : ResultNumber,
        display: operator === "" ? "0" : ResultDisplay,
      };
    case CalculateAction.OPERATION:
      return calculator.Operation(state, payload);
    case CalculateAction.EQUAL_TO:
      return calculator.Equals(state);
    default:
      return state;
  }
}
