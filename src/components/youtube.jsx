import React, { Component } from "react";
import ReactPlayer from "react-player";

class Youtube extends Component {
  changingStart() {}

  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=txyhCiALf2Y&list=PL4166A6B67CF5C6AE"
          config={{
            youtube: {
              playerVars: {
                controls: 1,
                autoplay: 1,
                start: 50,
              },
            },
          }}
          volume="0"
        />
      </div>
    );
  }
}

export default Youtube;
