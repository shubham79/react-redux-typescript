import { BankAction } from '../actions';
import { ActionType } from '../actionTypes';

const initialState = 0;

const reducer = (state = initialState, action: BankAction) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;

    case ActionType.WITHDRAW:
      return state - action.payload;

    case ActionType.BANKRUPT:
      return 0;

    default:
      return state;
  }
};

export default reducer;
