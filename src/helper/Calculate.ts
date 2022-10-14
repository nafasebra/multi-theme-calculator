function InfixToPrefix (str: string = '0') {
   const infix: string[] = [];
   const prefix: string[] = [];

   if(str.length > 3) {
      


      return prefix;
   }
   return '0'
}

function PrefixToEqual(str: string) {
  const options = {
    "+": (a: number, b: number) => a + b,
    "−": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
  };
}

export function PrintEqualOfSentence(str: string) {
  let operators = ["+", "-", "x", "/"];
  if (str !== "0") {
    if (operators.some((operator) => str.includes(operator))) {
      InfixToPrefix(str);
    }
    return str;
  }
  return "0";
}