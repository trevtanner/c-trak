import classes from "../Transactions/TransactionList.module.css";



const Totals = (props) => {

    return (
            <ul className={classes.users}>
                <li>BTC total: {props.btcTotal}</li>
                <li>ETH total: {props.ethTotal}</li>
                <li>ADA total: {props.adaTotal}</li>
                <li>BSC total: {props.bscTotal}</li>

            </ul>
    );


};

export default Totals;


//possibly add current value but would require an API call to get current value of coin