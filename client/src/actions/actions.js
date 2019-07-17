import { ADD_TRANSACTION, GET_TRANSACTIONS } from './types';

export const addTransaction = transactionHash => dispatch => {
  console.log('About to dispatch');
  dispatch({
    type: ADD_TRANSACTION,
    payload: transactionHash
  });
};

export const getTransactions = () => dispatch => {
  console.log('About to dispatch');
  dispatch({
    type: GET_TRANSACTIONS
  });
};
