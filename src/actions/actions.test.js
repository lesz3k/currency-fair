import { receiveTransactionDetails } from './actions';

describe('Actions', () => {
  it('should load the json data', () => {
    const json = {
      phoneNumber: '+350001',
    };

    const transaction = receiveTransactionDetails(json);

    expect(transaction.details.phoneNumber).toEqual(json.phoneNumber);
  });
});
