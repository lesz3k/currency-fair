import { types } from '../actions/actionTypes';

const initialState = {
  showModal: false,
  sendAmount: null,
  sendCurrency: null,
  receiveAmount: null,
  receiveCurrency: null,
  rate: null,
  fee: null,
  deliveryDate: null,
  savedAmount: null,
  scrollFromTop: '50px',
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, showModal: action.showOrHide };
    case types.GET_TRANSACTION:
      return action;
    case types.RECEIVE_TRANSACTION_DETAILS:
      const newState = action.details;
      return { ...newState };
    default:
      return state;
  }
};
