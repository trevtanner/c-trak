import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Heading from './components/UI/Heading'
import Footer from './components/UI/Layout/Footer';
import Totals from './components/Totals/Totals';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uCoin, uAmount, uValue, uDate) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { coin: uCoin, amount: uAmount, value: uValue, date: uDate.toString(), id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
    <Heading />
      <AddUser onAddUser={addUserHandler} />
      <Totals />
      <UsersList users={usersList} />
    <Footer />
    </div>
  );
}

export default App;
