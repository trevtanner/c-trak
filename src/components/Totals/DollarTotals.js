import Card from "../UI/Card"
import classes from "../Transactions/TransactionList.module.css";



const DollarTotals = (props) => {

    return (
            <Card className={classes.users}>
            <ul>
                <li>Total Dollar Amount: </li>
                <li>Total dollars spent on BTC:</li>
                <li>Total dollars spent on ETH: {props.ethTotal}</li>
                <li>Total dollars spent on ADA: {props.adaTotal}</li>
                <li>Total dollars spent on BSC: {props.bscTotal}</li>

            </ul>
            </Card>
    );


};

export default DollarTotals;