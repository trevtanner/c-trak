import React, { Fragment, useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Heading from './components/UI/Heading'
import Footer from './components/UI/Layout/Footer';
import Totals from './components/Totals/Totals';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  const addUserHandler = (transaction) => {
    setTransactionsList((prevTransactionsList) => {
      return [
       ...prevTransactionsList, transaction
      ];
    });
  };

  return (
    <Fragment>
    <Heading />
      <AddUser onSaveTransactionData={addUserHandler} />
      <Totals transactions={transactionsList} />
      <UsersList transactions={transactionsList} />
    <Footer />
    </Fragment>
  );
}

export default App;
