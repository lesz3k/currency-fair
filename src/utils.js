export const currencyChooser = currency => {
  if (currency === 'GBP') {
    return '£';
  } else if (currency === 'EUR') {
    return '€';
  } else return null;
};
