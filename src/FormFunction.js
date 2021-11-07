import React, { useState } from "react";

const Form = () => {
  const tipOptions = [5, 10, 15, 20];
  const taxValue = 1.05;

  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [toPay, setToPay] = useState(0);

  const onAmountChange = (e) => setAmount(e.target.value);
  const onTipChange = (e) => setTip(Number(e.target.value));

  const handleClick = (e) => {
    e.preventDefault();
    let toPay = (tip ? amount * ((100 + tip) / 100) : amount) * taxValue;
    setToPay(toPay);
  };

  return (
    <div>
      {toPay === 0 && (
        <form>
          <label htmlFor="amount">Net mount: </label>
          <input
            type="number"
            min="0"
            name="amount"
            onInput={onAmountChange}
          ></input>
          <hr />
          <label htmlFor="tip-select">Tip: </label>
          <select name="tip-select" onChange={onTipChange}>
            <option key="0" value="">
              Without tip
            </option>
            {tipOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <hr />
          <button type="button" onClick={handleClick}>
            Calculate
          </button>
        </form>
      )}
      {toPay !== 0 && (
        <p>
          gross amount: <span>{toPay.toFixed(2)}</span>
        </p>
      )}
    </div>
  );
};

export default Form;
