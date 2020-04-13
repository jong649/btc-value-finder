import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: "USD",
      USD: {
        code: "USD",
        symbol: "\u0024",
        description: "United States Dollar",
        rate_float: 0.0,
      },
      GBP: {
        code: "GBP",
        symbol: "\u00A3",
        description: "British Pound Sterling",
        rate_float: 0.0,
      },
      EUR: {
        code: "EUR",
        symbol: "\u20AC",
        description: "Euro",
        rate_float: 0.0,
      },
    };
  }

  componentDidMount() {
    this.getValue();
  }

  getValue = () => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.bpi);
        let clone = Object.assign({}, this.state);

        clone.USD.rate_float = data.bpi.USD.rate_float;
        clone.GBP.rate_float = data.bpi.GBP.rate_float;
        clone.EUR.rate_float = data.bpi.EUR.rate_float;
        this.setState(clone);
        console.log(this.state);
      });
  };

  selectCurrency = (e) => {
    console.log(e.target.value);
    let clone = Object.assign({}, this.state);
    clone.selectedCurrency = e.target.value;
    this.setState(clone);
  };

  render() {
    return (
      <div>
        <h1>Current Value of Bitcoin</h1>
        <label htmlFor="currency">Value in: </label>
        <select name="currency" id="currency" onChange={this.selectCurrency}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <div>
          {`1 BTC = ${this.state[this.state.selectedCurrency].symbol}${
            this.state[this.state.selectedCurrency].rate_float
          }`}
        </div>
        <button onClick={this.getValue}>Get Value</button>
      </div>
    );
  }
}

export default Card;
