import React, { useState } from 'react'

import Card from '../UI/Card'
import Transaction from './Transaction'
import TransactionFilter from './TransactionFilter'
import classes from './TransactionList.module.css'

const TransactionList = (props) => {
  const [filteredCoin, setFilteredCoin] = useState('BTC')

  const hasTransactions = props.transactions.length > 0

  const filterChangeHandler = (selectedCoin) => {
    setFilteredCoin(selectedCoin)
  } 

  let filteredTransactions = props.transactions

  if(filteredCoin === 'All') {
   filteredTransactions = props.transactions
  } else (
   filteredTransactions = props.transactions.filter((transaction) => {
    return transaction.coin.toString() === filteredCoin;
  }));


  return (
    <Card className={classes.users}>
      { hasTransactions &&
      <section>
      <h1>Transactions</h1>
      <TransactionFilter
      selected={filteredCoin}
      onChangeFilter={filterChangeHandler}
      />
        <Transaction
          transactions={filteredTransactions}
        />
    </section>
}
  </Card>
  )
}

export default TransactionList

//add tabs to filter betweeen transactions, All, BTC, ETH, etc...
//tab started, not currently displaying transactions
//use .filter() for other transactions 
//add function to delete transactions