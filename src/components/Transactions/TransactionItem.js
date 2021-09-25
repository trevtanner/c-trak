import React from 'react';

const TransactionItem = (props) => {
    let date = props.date
    let options = { timeZone: 'UTC', timeZoneName: 'short'};
    
    const time = date.toLocaleString('en-US', options);
  
  return (
    <li>
    <b>Amount:</b> {props.amount} {props.coin} 
    <br />
    <b>Cost in dollar at time of purchase:</b> ${props.value}
    <br />
    <b>Purchase Date:</b> {time}
  </li>
  );
};

export default TransactionItem;