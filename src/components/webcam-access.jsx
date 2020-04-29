import React from "react";
import axios from "axios";
import { Spring, config } from 'react-spring/renderprops';
import Button from './button';

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
        <Spring
          config={config.slow}
          delay={1000}
          from={{ opacity: 0, transform: 'translateX(-10vw)' }}
          to={{ opacity: 1, transform: 'translateX(0vw)' }}>
          {props => <Button stylize={props} idButton='button2' func={this.handleGetWebcam} butnTxt='TÉLÉPORTATION' move='left' />}
        </Spring>
        <div className="back-video">
          <iframe src={this.state.playerSource}></iframe>
        </div>
      </>
    );
  }
}

export default WebcamAccess;
