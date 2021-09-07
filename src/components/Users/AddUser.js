import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCoin, setEnteredCoin] = useState("BTC");
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAmount.trim().length === 0 || enteredValue.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid amount and value (non-empty values).",
      });
      return;
    }
    props.onAddUser(enteredCoin, enteredAmount, enteredValue, new Date(enteredDate));
    setEnteredCoin("BTC");
    setEnteredAmount("");
    setEnteredValue("");
    setEnteredDate("");
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
          <label htmlFor="value">Value in dollars ($)</label>
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

export default AddUser;
