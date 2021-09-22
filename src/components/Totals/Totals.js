import Card from "../UI/Card"
import classes from "../Transactions/TransactionList.module.css";



const Totals = (props) => {

    return (
            <Card className={classes.users}>
            <ul>
                <li>BTC total: {props.btcTotal}</li>
                <li>ETH total: {props.ethTotal}</li>
                <li>ADA total: {props.adaTotal}</li>
                <li>BSC total: {props.bscTotal}</li>

            </ul>
            </Card>
    );


};

export default Totals;


//Add tabs to swtich between totals, total amount paid and broken down by coin
//possibly add current value but would require an API call to get current value of coin