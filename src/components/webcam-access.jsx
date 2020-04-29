import React from "react";
import axios from "axios";

class WebcamAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webcamId: 0,
      playerSource: "",
    };
    this.getWebcamId = this.getWebcamId.bind(this);
    this.handleGetWebcam = this.handleGetWebcam.bind(this);
  }

  getWebcamId() {
    const rdmId = Math.floor(Math.random() * 200);
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/limit=1,${rdmId}?key=6EnLIffAmP8fvfN8ST6flzRDBPMKzglk`
      )
      .then((response) => response.data)
      .then((data) => {
        if (data.result && data.result.webcams[0].status === "active") {
          this.setState({ webcamId: data.result.webcams[0].id });
        } else {
          this.getWebcamId();
        }
      });
  }

  componentDidMount() {
    this.getWebcamId();
  }

  componentDidUpdate() {
    this.getWebcamId();
  }

  handleGetWebcam() {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/webcam=${this.state.webcamId}?show=webcams:image,player,location&key=6EnLIffAmP8fvfN8ST6flzRDBPMKzglk`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          playerSource: data.result.webcams[0].player.day.embed,
        });
        console.log(data);
        console.log(data.result.webcams[0].player.day.embed);
      });
  }

  render() {
    return (
      <>
        <button onClick={this.handleGetWebcam}>Clic</button>
        <div className="back-video">
          <iframe src={this.state.playerSource}></iframe>
        </div>
      </>
    );
  }
}

export default WebcamAccess;
