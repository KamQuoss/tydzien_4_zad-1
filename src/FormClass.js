import React from "react";

class FormClassComp extends React.Component {
  tipOptions = [5, 10, 15, 20];
  taxValue = 1.05;
  state = {
    amount: null,
    tip: 0,
    result: 0
  };

  onChange = (e) => {
    let keyName = e.target.name;
    let value = e.target.value;
    this.setState({ [keyName]: value });
  };

  handleClick = (e) => {
    e.preventDefault();
    if (!this.state.amount) return;
    let result =
      (this.state.tip
        ? this.state.amount * ((100 + Number(this.state.tip)) / 100)
        : this.state.amount) * this.taxValue;
    this.setState({ result: result.toFixed(2) });
  };

  render() {
    return this.state.result === 0 ? (
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
        gross amount: <span>{this.state.result}</span>
      </p>
    );
  }
}

export default FormClassComp;
