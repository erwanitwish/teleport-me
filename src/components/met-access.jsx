import React from "react";
import axios from "axios";
import chevalet from "../chevalet.png";
import Button from './button';

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
        this.setState({ art: res.data });
      });
    this.getArrayID();
  }

  render() {
    return (
      <div className="tableau">
        <Button idButton='button1' func={this.getArt} butnTxt='TABLEAU' />
        <h1 id="title-tableau">{this.state.art.objectName}</h1>
        <p id="credit-tableau">{this.state.art.creditLine}</p>
        <div className="chevalet-tableau">
          <div className="chevalet">
            <img src={chevalet} alt="chevalet"></img>
          </div>
          <div className="perspective">
            <img
              className="image-tableau"
              src={this.state.art.primaryImage}
              alt={this.state.art.objectName}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MetAccess;
