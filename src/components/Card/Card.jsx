import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USD: {
        code: "USD",
        symbol: "$",
        description: "United States Dollar",
        rate_float: 0.0,
      },
    };
  }

  handleClick = () => {
    console.log("clicked");
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.bpi.USD.rate_float);
        let clone = Object.assign({}, this.state);

        clone.USD.rate_float = data.bpi.USD.rate_float;
        this.setState(clone);
        console.log(clone.USD);
      });
  };

  render() {
    return (
      <div>
        <h1>Card</h1>
        <h2>Currency</h2>
        <div>
          {this.state.USD.code} {this.state.USD.symbol}
          {this.state.USD.rate_float}
        </div>
        <button onClick={this.handleClick}>Get Value</button>
      </div>
    );
  }
}

export default Card;
