import React from "react";
import axios from "axios";

class MetAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      art: "",
      loading: true,
    };
    this.getArt = this.getArt.bind(this);
  }

  getArt() {
    const randomNumber = Math.floor(Math.random() * 20000) + 1;
    console.log(randomNumber);
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`
      )
      .then((res) => {
        if (res.data.isHighlight === true) {
          this.setState({ art: res.data });
          console.log(res.data);
        } else {
          this.getArt();
        }
      })
      .catch((err) => this.getArt());
  }

  render() {
    return (
      <div>
        <button onClick={this.getArt}>salut</button>
        <h1>{this.state.art.objectName}</h1>
        <p>{this.state.art.creditLine}</p>
        <img
          src={this.state.art.primaryImage}
          alt={this.state.art.objectName}
        ></img>
      </div>
    );
  }
}

export default MetAccess;
