import React from "react";
import axios from "axios";

class MetAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artId: "",
      art: "",
      loading: true,
      letters: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      letter: "",
      arrayId: [],
    };
    this.getArt = this.getArt.bind(this);
    this.getArrayID = this.getArrayID.bind(this);
    this.randomLetter = this.randomLetter.bind(this);
  }

  randomLetter() {
    this.setState({
      letter: this.state.letters[
        Math.floor(Math.random() * (this.state.letters.length - 1))
      ],
    });
  }

  getArrayID() {
    this.setState({ arrayID: [] });
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=${this.state.letter}`
      )
      .then((res) => {
        this.setState({
          arrayId: [...this.state.arrayId, ...res.data.objectIDs],
        });
      })
      .catch((err) => this.getArrayID());
    this.randomLetter();
  }

  componentDidMount() {
    this.randomLetter();
    this.getArrayID();
  }

  getArt() {
    const finalId = this.state.arrayId[
      Math.floor(Math.random() * (this.state.arrayId.length - 1))
    ];
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${finalId}`
      )
      .then((res) => {
        this.setState({ loading: false });
        this.setState({ art: res.data });
      });
    this.getArrayID();
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
