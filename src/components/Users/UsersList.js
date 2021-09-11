import React from 'react'

import Card from '../UI/Card'
import Transaction from './Transaction'
import classes from './UsersList.module.css'

const UsersList = (props) => {
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

export default UsersList
