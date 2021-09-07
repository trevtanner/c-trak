import React from "react";

import Card from "../UI/Card"
import classes from "../Users/UsersList.module.css";

const Totals = props => {
    const chartDataPoints = [
        { label: 'BTC', value: 0 },
        { label: 'ETH', value: 0 },
        { label: 'ADA', value: 0 },
        { label: 'BSC', value: 0 },
    ]

    return (
        <div>
            <Card className={classes.users}>
            <ul>
                <li>BTC total:{}</li>
                <li>ETH total:</li>
                <li>ADA total:</li>
                <li>BSC total:</li>

            </ul>
            </Card>
        </div>
    )


};

export default Totals;