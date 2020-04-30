import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Spring, config } from 'react-spring/renderprops';
import Button from './button';

class YoutubeAccess extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      youtubeUrl: 'https://www.youtube.com/watch?v=rgZfmWXTqas',
      startTime: 50
    };
    this.handleRandomTime = this.handleRandomTime.bind(this);
  }

  handleRandomTime () {
    this.setState({ startTime : Math.floor(Math.random() * 3500) });
  }

  componentDidMount() {
    this.handleRandomTime();
    console.log('Hello');
  }

  render () {
    console.log(this.state.startTime);
    return (
      <>
        {<Spring
          config={config.slow}
          delay={1000}
          from={{ opacity: 0, transform: 'translateX(-10vw)' }}
          to={{ opacity: 1, transform: 'translateX(0vw)' }}>
          {props => <Button stylize={props} idButton='button2' func={this.handleRandomTime} butnTxt='TÉLÉPORTATION' move='left' />}
        </Spring>}
        <div className="back-video">
          <ReactPlayer
            url={this.state.youtubeUrl}
            width='100%'
            height='100%'
            playing
            muted
            config={{
              youtube: {
                playerVars: {
                  control: 0,
                  start: this.state.startTime
                }
              }}} />
        </div>
      </>
    );
  }
}

export default YoutubeAccess;