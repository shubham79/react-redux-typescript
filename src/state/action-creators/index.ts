import { Dispatch } from 'redux';
import { BankAction } from '../actions';
import { ActionType } from '../actionTypes';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const wentBankrupt = () => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
