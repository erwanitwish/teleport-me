import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from 'react-spring';

function Credits() {

  const creditMove = useSpring({ opacity: 1, top: '87%', from: { opacity: 0, top: '75%' }, delay: 1000, config: config.slow });

  return (
    <div className="credits">
      <Link to="/">
        <button id="retour-button">Retour</button>
      </Link>
      <animated.div style={creditMove} className="text-credits">
        <h1>
          Design and Dev by <br />
          Brice Le Gallo & Erwan Quillec
        </h1>
        <p>thanks to Laura</p>
      </animated.div>
    </div>
  );
}

export default Credits;
