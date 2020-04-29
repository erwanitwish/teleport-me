import React from "react";
import axios from "axios";

class WebcamAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getWebcamId = this.getWebcamId.bind(this);
  }

  getWebcamId() {
    const rdmId = Math.floor(Math.random() * 200);
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/limit=1,${rdmId}?key=6EnLIffAmP8fvfN8ST6flzRDBPMKzglk`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data.result.webcams[0]);
      });
  }

  render() {
    return (
      <>
        <button onClick={this.getWebcamId}>Clic</button>
      </>
    );
  }
}

export default WebcamAccess;
