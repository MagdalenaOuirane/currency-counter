import React from 'react';
import './App.css';
import Dollars from './Dollars';
import Euro from './Euro';

class ExchangeCounter extends React.Component {

  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.2
  }

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }


  render() {

    const { amount, ratioDollar, ratioEuro } = this.state;
    return (
      <div className="app">
        <label>
          <input
            value={this.state.amount}
            type="number"
            onChange={this.handleChange}
          />
        </label>
        <Dollars value={amount} ratio={ratioDollar} />
        <Euro value={amount} ratio={ratioEuro} />
      </div>
    )
  }
}

export default ExchangeCounter;
