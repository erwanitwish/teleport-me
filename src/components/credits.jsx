import React from "react";
import { Link } from "react-router-dom";

function Credits() {
  return (
    <div className="credits">
      <Link to="/">
        <button id="retour-button">Retour</button>
      </Link>
      <div className="text-credits">
        <h1>
          Design and Dev by <br />
          Brice Le Gallo & Erwan Quillec
        </h1>
        <p>thanks to Laura</p>
      </div>
    </div>
  );
}

export default Credits;
