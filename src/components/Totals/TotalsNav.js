import { Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Card from "../UI/Card";
import CoinTotals from "./CoinTotals";
import DollarTotals from "./DollarTotals";

import classes from "./TotalsNav.module.css";

const TotalsNav = (props) => {
  return (
      <Card>
      <Tabs
        defaultActiveKey="coin"
        id="totals"
        className={classes.tab}
      >
        <Tab eventKey="coin" title="Coin Totals">
        <section className={classes.users}>
          <CoinTotals
            transactions={props.transactionsList}
            btcTotal={props.btcTotal}
            ethTotal={props.ethTotal}
            adaTotal={props.adaTotal}
            bscTotal={props.bscTotal}
          />
           </section> 
        </Tab>
        <Tab eventKey="dollar" title="Dollar Totals">
        <section className={classes.users}>
          <DollarTotals
            transactions={props.transactionsList}
            dollarTotal={props.dollarTotal}
            btcDollarTotal={props.btcDollarTotal}
            ethDollarTotal={props.ethDollarTotal}
            adaDollarTotal={props.adaDollarTotal}
            bscDollarTotal={props.bscDollarTotal}
             />
          </section>
        </Tab>
        <Tab eventKey="current" title="Current Value" disabled>
        </Tab>
      </Tabs>
      </Card>
  );
};

export default TotalsNav;
