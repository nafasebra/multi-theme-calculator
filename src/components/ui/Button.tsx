import React from "react";

type PropType = {
  text: string;
  includedStyle: string;
  handleClick: () => void;
};

function Button(props: PropType) {
  const { text, includedStyle, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className={`select-none cursor-pointer py-2 px-3 md:px-5 rounded-lg relative ${includedStyle}`}
    >
      {text}
    </button>
  );
}

export default Button;
