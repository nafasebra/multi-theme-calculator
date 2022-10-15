export function RemoveLastChar (str: string) {
   if(str !== "0") 
      return str.slice(0, str.length - 1);
   return '0'
}
