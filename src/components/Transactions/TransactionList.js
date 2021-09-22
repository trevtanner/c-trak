import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import Card from '../UI/Card'
import Transaction from './Transaction'
import classes from './TransactionList.module.css'

const TransactionList = (props) => {
  const [transactionDisplay, setTransactionDisplay] = useState()

  return (
    <Card className={classes.users}>
    <ul>
      {props.transactions.map((item) => (
        <Transaction
          key={item.id}
          coin={item.coin}
          amount={item.amount}
          value={item.value}
          date={item.date}
        />
      ))}
    </ul>
  </Card>
  )
}

export default TransactionList

//add tabs to filter betweeen transactions, All, BTC, ETH, etc...
//tab started, not currently displaying transactions
//use .filter() for other transactions 