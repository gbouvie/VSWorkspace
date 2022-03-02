import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransationList } from './components/TransationList';
import { AddTransation } from './components/AddTransation';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
}

export default App;
