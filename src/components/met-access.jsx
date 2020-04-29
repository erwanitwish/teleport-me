import React from "react";
import axios from "axios";

class MetAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artId: "",
      art: "",
      loading: true,
    };
    this.getArt = this.getArt.bind(this);
    this.getID = this.getID.bind(this);
  }

  getID() {
    const randomNumber = Math.floor(Math.random() * 50000) + 1;
    console.log(randomNumber);
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`
      )
      .then((res) => {
        if (res.data.isHighlight === true) {
          this.setState({ artId: res.data.objectID });
          console.log(res.data);
        } else {
          this.getID();
        }
      })
      .catch((err) => this.getID());
  }

  componentDidMount() {
    this.getID();
  }

  componentDidUpdate() {
    this.getID();
  }

  getArt() {
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.artId}`
      )
      .then((res) => {
        this.setState({ loading: false });
        this.setState({ art: res.data });
      });
  }

  render() {
    return (
      <>
        <button onClick={this.getArt}>salut</button>
        <div>
          <p>{this.state.loading && "...loading"}</p>
        </div>
        <h1>{this.state.art.objectName}</h1>
        <p>{this.state.art.creditLine}</p>
        <img
          src={this.state.art.primaryImage}
          alt={this.state.art.objectName}
        ></img>
      </>
    );
  }
}

export default MetAccess;
