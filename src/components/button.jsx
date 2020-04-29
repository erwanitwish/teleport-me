import React from "react";

function Button({idButton, func, butnTxt, stylize }) {
  return (
    <>
      <button style={stylize} id={idButton} onClick={func}>{butnTxt}</button>
    </>
  );
}

export default Button;
