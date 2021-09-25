import React from "react";

import classes from "./TransactionFilter.module.css";

const TransactionFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes.transactionsFilter}>
      <div className={classes.transactionsFilterControl}>
        <label>Filter by Coin:</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="All">All</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="ADA">ADA</option>
          <option value="BSC">BSC</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionFilter;
