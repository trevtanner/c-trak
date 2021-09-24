import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import Card from '../UI/Card'
import Transaction from './Transaction'
import classes from './TransactionList.module.css'

const TransactionList = (props) => {
  const [transactionDisplay, setTransactionDisplay] = useState()

  const hasTransactions = props.transactions.length > 0

  

  return (
    <Card className={classes.users}>
      { hasTransactions &&
      <section>
      <h1>Transactions</h1>
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
    </section>
}
  </Card>
  )
}

export default TransactionList

//add tabs to filter betweeen transactions, All, BTC, ETH, etc...
//tab started, not currently displaying transactions
//use .filter() for other transactions 