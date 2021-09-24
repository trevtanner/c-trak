import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddTransaction.module.css";

const AddTransaction = (props) => {
  const [error, setError] = useState();
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCoin, setEnteredCoin] = useState("BTC");
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAmount.trim().length === 0) {
      setError({
        title: "Invalid Amount",
        message: "Please enter a valid amount (non-empty values).",
      });
      return;
    } if (enteredValue.trim().length === 0) {
      setError({
        title: "Invalid Value",
        message: "Please enter a valid value (non-empty values).",
      });
      return;
    } if (enteredDate.trim().length === 0) {
      setError({
        title: "Invalid Date",
        message: "Please enter a valid date.",
      });
      return;
    }
   const transaction = {
     id: Math.random().toString(),
     coin: enteredCoin,
     amount: enteredAmount,
     value: enteredValue,
     date: new Date(enteredDate)
   }

    props.onSaveTransactionData(transaction);
    setEnteredCoin("BTC");
    setEnteredAmount("");
    setEnteredValue("");
    setEnteredDate("");
    console.log(transaction);
  };

  const coinChangeHandler = (event) => {
    setEnteredCoin(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="coin">Coin</label>
          <Form.Select
            id="coin"
            type="number"
            value={enteredCoin}
            onChange={coinChangeHandler}
          >
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ether</option>
            <option value="ADA">Cardano</option>
            <option value="BSC">Binance Smart Chain</option>
          </Form.Select>
          <label htmlFor="amount" className="pt-2">Amount of {enteredCoin}</label>
          <input
            id="amount"
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <label htmlFor="value">Amount Paid in Dollars($)</label>
          <input
            id="value"
            type="number"
            value={enteredValue}
            onChange={valueChangeHandler}
          />
          <div className='new-expense__control'>
          <label>Purchase Date</label>
          <input
            type='datetime-local'
            min='2009-01-03 00:00:00'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
          <Button type="submit">Add Purchase</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTransaction;


//Look into pulling value of coin at time of purchase from API given the date entered
//Add field for any fees