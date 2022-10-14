export function RemoveLastChar (str: string) {
   if(str.length > 0) 
      return str.slice(0, str.length - 1);
   return ''
}
