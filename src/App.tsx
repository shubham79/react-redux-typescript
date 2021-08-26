import React from 'react';
import './App.css';

import  {useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney, wentBankrupt} = bindActionCreators(actionCreators, dispatch)

  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdrae</button>
      <button onClick={() => wentBankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
