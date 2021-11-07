import React from "react";

class FormClassComp extends React.Component {
  tipOptions = [5, 10, 15, 20];
  taxValue = 1.05;
  state = {
    amount: 0,
    tip: 0,
    toPay: 0
  };

  onChange = (e) => {
    let keyName = e.target.name;
    let value = e.target.value;
    this.setState({ [keyName]: value });
  };

  handleClick = (e) => {
    e.preventDefault();
    let toPay =
      (this.state.tip
        ? this.state.amount * ((100 + Number(this.state.tip)) / 100)
        : this.state.amount) * this.taxValue;
    this.setState({ toPay: toPay.toFixed(2) });
  };

  render() {
    return this.state.toPay === 0 ? (
      <div>
        <form>
          <label htmlFor="amount">Net mount: </label>
          <input
            type="number"
            min="0"
            name="amount"
            onInput={this.onChange.bind(this)}
          ></input>
          <hr />
          <label htmlFor="tip">Tip: </label>
          <select name="tip" onChange={this.onChange.bind(this)}>
            <option key="0" value="">
              Without tip
            </option>
            {this.tipOptions.map((option) => (
              <option key={option} value={option}>
                {option}%
              </option>
            ))}
          </select>
          <hr />
          <button type="button" onClick={this.handleClick}>
            Calculate
          </button>
        </form>
      </div>
    ) : (
      <p>
        gross amount: <span>{this.state.toPay}</span>
      </p>
    );
  }
}

export default FormClassComp;
