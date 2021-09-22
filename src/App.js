import React, { Fragment, useState } from "react";

import AddTransaction from "./components/Transactions/AddTransaction";
import TransactionList from "./components/Transactions/TransactionList";
import Heading from "./components/UI/Heading";
import Footer from "./components/UI/Layout/Footer";
import Totals from "./components/Totals/Totals";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [btcTotal, setBtcTotal] = useState(0);
  const [ethTotal, setEthTotal] = useState(0);
  const [adaTotal, setAdaTotal] = useState(0);
  const [bscTotal, setBscTotal] = useState(0);

  const addUserHandler = (transaction) => {
    setTransactionsList((prevTransactionsList) => {
      return [...prevTransactionsList, transaction];
    });

    //fix this, current returns a string, so new amounts are appended to end of string intead of added
    //FIXED! Just needed to parse them as floats
    const addToTotal = () => {
      if (transaction.coin === "BTC") {
        setBtcTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
      }
      if (transaction.coin === "ETH") {
        setEthTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
      }
      if (transaction.coin === "ADA") {
        setAdaTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
      }
      if (transaction.coin === "BSC") {
        setBscTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
      }
    };
    addToTotal(parseInt(transaction));
  };

  return (
    <Fragment>
      <Heading />
      <AddTransaction onSaveTransactionData={addUserHandler} />
      <Totals
        transactions={transactionsList}
        btcTotal={btcTotal}
        ethTotal={ethTotal}
        adaTotal={adaTotal}
        bscTotal={bscTotal}
      />
      <TransactionList transactions={transactionsList} />
      <Footer />
    </Fragment>
  );
};

export default App;
