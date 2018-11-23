import { types } from './actionTypes';
import axios from 'axios';

const url = '../data/transaction.json';

const fallBackData = {
  sendAmount: '2,000.00',
  sendCurrency: 'EUR',
  receiveAmount: '1,717.94',
  receiveCurrency: 'GBP',
  rate: '0.86022',
  fee: '2.50',
  deliveryDate: '25th of November',
  savedAmount: '66.19',
  phoneNumber: '+353 872251177',
};

export const showModal = showOrHide => dispatch => {
  dispatch({
    type: types.SHOW_MODAL,
    showOrHide,
  });
};

export function receiveTransactionDetails(json) {
  //apply received transaction data to the store
  return {
    type: types.RECEIVE_TRANSACTION_DETAILS,
    details: json,
  };
}

export const getTransaction = () => dispatch => {
  //get the transaction data
  //normally, the data would be obtained from an API call, like below...
  return axios
    .get(url)
    .then(response => {
      dispatch(receiveTransactionDetails(response.data));
    })
    .catch(function(error) {
      // ... but this will not work on the local client browser (from '/dist/ folder), thus for that case I'll be serving a static object contiaing example response from API
      console.log(error);
      console.log('loading fallback data...');
      dispatch(receiveTransactionDetails(fallBackData));
    });
};
