import React, { Fragment, useState } from "react";
import FadeIn from 'react-fade-in';

import AddTransaction from "./components/Transactions/AddTransaction";
import TransactionList from "./components/Transactions/TransactionList";
import Heading from "./components/UI/Layout/Heading";
import Footer from "./components/UI/Layout/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import TotalsNav from "./components/Totals/TotalsNav";

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [btcTotal, setBtcTotal] = useState(0);
  const [ethTotal, setEthTotal] = useState(0);
  const [adaTotal, setAdaTotal] = useState(0);
  const [bscTotal, setBscTotal] = useState(0);

  const [dollarTotal, setDollarTotal] = useState(0)
  const [btcDollarTotal, setBtcDollarTotal] = useState(0)
  const [ethDollarTotal, setEthDollarTotal] = useState(0)
  const [adaDollarTotal, setAdaDollarTotal] = useState(0)
  const [bscDollarTotal, setBscDollarTotal] = useState(0)

  const [btcPPC, setBtcPPC] = useState(0)
  const [ethPPC, setEthPPC] = useState(0)
  const [adaPPC, setAdaPPC] = useState(0)
  const [bscPPC, setBscPPC] = useState(0)



  const addUserHandler = (transaction) => {
    setTransactionsList((prevTransactionsList) => {
      return [...prevTransactionsList, transaction];
    });

    const addToTotal = () => {
      setDollarTotal(prevState => parseFloat(prevState) + parseFloat(transaction.value));

      let newTrans = parseInt(transaction.value) * parseInt(transaction.amount)

      if (transaction.coin === "BTC") {
        setBtcTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
        setBtcDollarTotal(prevState => parseFloat(prevState) + parseFloat(transaction.value));
        setBtcPPC(prevState => (parseFloat(prevState)*parseInt(btcTotal)+parseInt(newTrans)))
      }
      if (transaction.coin === "ETH") {
        setEthTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
        setEthDollarTotal(prevState => parseFloat(prevState) + parseFloat(transaction.value));

      }
      if (transaction.coin === "ADA") {
        setAdaTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
        setAdaDollarTotal(prevState => parseFloat(prevState) + parseFloat(transaction.value));

      }
      if (transaction.coin === "BSC") {
        setBscTotal(prevState => parseFloat(prevState) + parseFloat(transaction.amount));
        setBscDollarTotal(prevState => parseFloat(prevState) + parseFloat(transaction.value));

      }
    };
    addToTotal(parseInt(transaction));
  };

  return (
    <Fragment>
      <section id='heading'>
      <Heading />
      </section>
      <section className='body'>
    <FadeIn delay='200'>
      <AddTransaction onSaveTransactionData={addUserHandler} />
    </FadeIn>
    <FadeIn
    delay='250'>
      <TotalsNav
        transactions={transactionsList}
        btcTotal={btcTotal}
        ethTotal={ethTotal}
        adaTotal={adaTotal}
        bscTotal={bscTotal}
        dollarTotal={dollarTotal}
        btcDollarTotal={btcDollarTotal}
        ethDollarTotal={ethDollarTotal}
        adaDollarTotal={adaDollarTotal}
        bscDollarTotal={bscDollarTotal}

         />
         </FadeIn>
         <FadeIn
         delay='300'>
      <TransactionList transactions={transactionsList} />
    </FadeIn>
    </section>
      <section className='footer'>
      <Footer />
      </section>
    </Fragment>
  );
};

export default App;

//find way to move some logic out of App component
//add loading / fade in and out to components
