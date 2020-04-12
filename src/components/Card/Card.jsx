import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "USD",
      symbol: "&#36;",
      rate: "",
      description: "United States Dollar",
      rate_float: 0.0,
    };
  }
  handleClick() {
    console.log("clicked");
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Card</h1>
        <h2>Currency</h2>
        <div>{this.state.code}</div>
        <button onClick={this.handleClick}>Get Value</button>
      </div>
    );
  }
}

export default Card;
