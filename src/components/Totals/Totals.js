import React, { useState } from "react";

import Card from "../UI/Card"
import classes from "../Users/UsersList.module.css";



const Totals = (props) => {
    let btcTotal = 0;
    let ethTotal = 0;
    let adaTotal = 0;
    let bscTotal = 0;

    if (props.coin === 'BTC') {
        btcTotal += props.amount;
        return btcTotal
    } if (props.coin === 'ETH') {
        ethTotal += props.amount
    }


    return (
            <Card className={classes.users}>
            <ul>
                <li>BTC total: {btcTotal}</li>
                <li>ETH total: {ethTotal}</li>
                <li>ADA total:</li>
                <li>BSC total:</li>

            </ul>
            </Card>
    );


};

export default Totals;