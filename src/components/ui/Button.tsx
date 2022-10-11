import React from "react";

type PropType = {
  text: string;
  includedStyle: string;
};

function Button(props: PropType) {
  const { text, includedStyle } = props;
  return (
    <button
      className={`p-5 rounded-lg relative after:contents-["*"] after:absolute after:top-1 after:left-0 after:w-full after:h-full ${includedStyle}`}
    >
      {text}
    </button>
  );
}

export default Button;
