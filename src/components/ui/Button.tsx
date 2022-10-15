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
      className={`cursor-pointer py-2 px-3 md:px-5 rounded-lg relative after:contents-["*"] after:absolute after:top-1 after:left-0 after:w-full after:h-full after:bg-main after:rounded-lg after:-z-10 ${includedStyle}`}
    >
      {text}
    </button>
  );
}

export default Button;
