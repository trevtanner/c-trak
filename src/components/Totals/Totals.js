import Card from "../UI/Card"
import classes from "../Users/UsersList.module.css";



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