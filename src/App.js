import React, { Fragment, useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
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
        setEthTotal(ethTotal + transaction.amount);
      }
      if (transaction.coin === "ADA") {
        setAdaTotal(adaTotal + transaction.amount);
      }
      if (transaction.coin === "BSC") {
        setBscTotal(bscTotal + transaction.amount);
      }
    };
    addToTotal(parseInt(transaction));
  };

  return (
    <Fragment>
      <Heading />
      <AddUser onSaveTransactionData={addUserHandler} />
      <Totals
        transactions={transactionsList}
        btcTotal={btcTotal}
        ethTotal={ethTotal}
        adaTotal={adaTotal}
        bscTotal={bscTotal}
      />
      <UsersList transactions={transactionsList} />
      <Footer />
    </Fragment>
  );
};

export default App;
