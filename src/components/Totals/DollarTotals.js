import classes from "../Transactions/TransactionList.module.css";



const DollarTotals = (props) => {

    return (
            <ul className={classes.users}>
                <li>Total amount: $ {props.dollarTotal}</li>
                <li>Total spent on BTC: $ {props.btcDollarTotal}</li>
                <li>Total spent on ETH: $ {props.ethDollarTotal}</li>
                <li>Total spent on ADA: $ {props.adaDollarTotal}</li>
                <li>Total spent on BSC: $ {props.bscDollarTotal}</li>

            </ul>
    );


};

export default DollarTotals;