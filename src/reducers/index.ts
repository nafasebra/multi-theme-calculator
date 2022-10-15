enum CalculateAction {
   ADD_FIRST_NUMBER = "ADD_FIRST_NUMBER",
   ADD_SECOND_NUMBER = "ADD_SECOND_NUMBER",
   REMOVE_LAST_CHAR = "REMOVE_LAST_CHAR",
   RESET = "RESET",
   SUM_OPERATOR = "SUM_OPERATOR",
   MINUS_OPERATOR = "MINUS_OPERATOR",
   DIVIDE_OPERATOR = "DIVIDE_OPERATOR",
   MULTIPLY_OPERATOR = "MULTIPLY_OPERATOR",
}

type CalculateType = {
   firstNumber: string;
   secondNumber: string;
   operator: string;
   display: string;
}

interface CalculateActionType {
   type: CalculateAction
   payload: CalculateType | string;
}

const initialState: CalculateType = {
   firstNumber: '0',
   secondNumber: '0',
   operator: '',
   display: '0',
}


export function reducer(state = initialState, action: CalculateActionType) {
   switch(action.type) {
      
   }
}