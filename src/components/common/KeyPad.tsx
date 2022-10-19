import React, { useContext } from "react";
import { CalculateContext } from "../../context/CalculateContext";
import { CalculateAction } from "../../reducers";
import Button from "../ui/Button";

function KeyPad() {
  const useCalcContext = useContext(CalculateContext);

  console.log(useCalcContext.state);

  const HandleButtonCLick = (text: string) => {
    switch (text) {
      case "DEL":
        useCalcContext.dispatch({ type: CalculateAction.REMOVE_LAST_CHAR });
        break;
      case "+":
        useCalcContext.dispatch({ type: CalculateAction.SUM_OPERATOR });
        break;
      case "-":
        useCalcContext.dispatch({ type: CalculateAction.MINUS_OPERATOR });
        break;
      case "x":
        useCalcContext.dispatch({ type: CalculateAction.MULTIPLY_OPERATOR });
        break;
      case "/":
        useCalcContext.dispatch({ type: CalculateAction.DIVIDE_OPERATOR });
        break;
      case "RESET":
        useCalcContext.dispatch({ type: CalculateAction.RESET });
        break;
      case "=":
        return false;
      default:
        console.log("click");
        useCalcContext.dispatch({
          type: CalculateAction.ADD_TO_DISPLAY,
          payload: text,
        });
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 text-xl md:text-2xl font-bold bg-keypad rounded-lg p-5 relative">
      <Button
        handleClick={() => HandleButtonCLick("7")}
        text="7"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("8")}
        text="8"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("9")}
        text="9"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("DEL")}
        text="DEL"
        includedStyle="bg-btn-secondary text-btn-secondary "
      />
      <Button
        handleClick={() => HandleButtonCLick("4")}
        text="4"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("5")}
        text="5"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("6")}
        text="6"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("+")}
        text="+"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("1")}
        text="1"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("2")}
        text="2"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("3")}
        text="3"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("-")}
        text="-"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick(".")}
        text="."
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("0")}
        text="0"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("/")}
        text="/"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("x")}
        text="x"
        includedStyle="bg-btn-primary text-btn-primary"
      />
      <Button
        handleClick={() => HandleButtonCLick("RESET")}
        text="RESET"
        includedStyle="bg-btn-secondary text-btn-secondary col-span-2"
      />
      <Button
        handleClick={() => HandleButtonCLick("=")}
        text="="
        includedStyle="bg-btn-third text-btn-third col-span-2"
      />
    </div>
  );
}

export default KeyPad;
