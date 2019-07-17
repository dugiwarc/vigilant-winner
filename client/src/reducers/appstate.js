const initState = {
  transactions: []
};

export const appstateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      console.log('ADD_TRANSACTION');
      return state;
    case 'GET_TRANSACTIONS':
      console.log('GET_TRANSACTIONS');
      return state;
    default:
      return state;
  }
};
