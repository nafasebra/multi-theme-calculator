import React, { useContext } from "react";
import { CalculateContext } from "../../context/CalculateContext";
import { AddChar, RemoveLastChar } from "../../utils/common";
import Button from "../ui/Button";

function KeyPad() {
  const useCalcContext = useContext(CalculateContext);
  const HandleButtonCLick = (text: string) => {
    switch (text) {
      case "DEL":
        useCalcContext.setInput(RemoveLastChar(useCalcContext.input));
      case "+":
        return false;
      case "-":
        return false;
      case "x":
        return false;
      case "/":
        return false;
      case "RESET":
        useCalcContext.setInput('0');
      case "=":
        return false;
      default:
        useCalcContext.setInput(AddChar(text, useCalcContext.input));
    }
  };

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 text-2xl font-bold bg-keypad rounded-lg p-5 relative -z-20">
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
