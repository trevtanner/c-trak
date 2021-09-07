import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <b>Amount:</b> {user.amount} {user.coin} 
            <br />
            <b>Value:</b> ${user.value}
            <br />
            <b>Purchase Date:</b> {user.date}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
