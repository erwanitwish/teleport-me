import React from "react";

function Button({idButton, func, butnTxt }) {
  return (
    <>
      <button id={idButton} onClick={func}>{butnTxt}</button>
    </>
  );
}

export default Button;
