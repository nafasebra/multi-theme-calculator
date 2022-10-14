export const Sum = (str: string) => {
  if (str !== "0") {
    let array = str.split("+");
    return Number(array[1]) + Number(array[2]);
  }
  return "0";
};
export const Multiply = (str: string) => {
  if (str !== "0") {
    let array = str.split("-");
    return Number(array[1]) - Number(array[2]);
  }
  return "0";
};
export const Minus = (str: string) => {
  if (str !== "0") {
    let array = str.split("*");
    return Number(array[1]) * Number(array[2]);
  }
  return "0";
};
export const Divide = (str: string) => {
  if (str !== "0") {
    let array = str.split("/");
    return !isFinite(Number(array[1]) / Number(array[2]))
      ? Number(array[1]) / Number(array[2])
      : "Error!";
  }
  return "0";
};
