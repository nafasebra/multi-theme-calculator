import { CalculateType } from "../reducers";

export function Operation(state: CalculateType, payload: string | CalculateType) {
  return {
    ...state,
    operator: payload,
    number: "0",
    display:
      state.display === "0" && state.number !== ""
        ? state.number
        : state.display,
  };
}

const CustomMath = (a: number, b: number, operator: string) =>
  operator === "+"
    ? a + b
    : operator === "-"
    ? a - b
    : operator === "*"
    ? a * b
    : a / b;

export function Equals(state: CalculateType) {
  if (state.operator !== "" && state.number !== "") {
    return {
      operator: "",
      number: "0",
      display:
        state.number === "0" && state.operator === "/"
          ? "Error divide with 0"
          : CustomMath(
              Number(state.display),
              Number(state.number),
              state.operator
            ),
    };
  }
  return state;
}
