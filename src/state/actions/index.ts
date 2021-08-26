import { ActionType } from '../actionTypes';

type DepositAction = {
  type: ActionType.DEPOSIT;
  payload: number;
};

type WithdrawAction = {
  type: ActionType.WITHDRAW;
  payload: number;
};

type BankruptAction = {
  type: ActionType.BANKRUPT;
};

export type BankAction = DepositAction | WithdrawAction | BankruptAction;
