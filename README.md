# CurrencyFair Test

This project was build from scratch with React + Redux using Webpack + Babel.

## Preview

The built, ready to use version of the app is in the `/dist` folder. To run the app locally, please download the folder and run the `index.html` in your browser.
You can also preview the app after cloning / downloading the repo, and then running `npm install` & `npm start`

## Installation

- `git clone git@github.com:lesz3k/currency-fair.git`
- cd currency-fair
- npm install
- npm start
- visit `http://localhost:8080/`

## App data

The dummy data for the app (amounts, currencies, etc) is mocked in the `'/data/transaction.json'` file. In case of running the app with a local server (via npm), it will be fetched via AJAX call from that JSON file and stored in the Redux Store, using actions `getTransaction` and `receiveTransactionDetails`, located in `'/src/actions/actions.js'`.
In case of running the app in the browser from `'/dist'` folder (as AJAX call will fail in browser), the dummy data will be taken from a `fallBackData` object containg same data as the JSON file.
This was set to be as close as possible to the real-live example, where the app data would be taken from the server via the API call.

## Styling 

The app is using `styled-components` only, meaning there are no CSS files - all components are styled directly inside the JSX.
The main theme, containing colors, font sizes etc is located in the `'/src/theme.js'` file, which contains the `theme` object, along with some global settings - CSS reset & font-faces. The theme is then passed as a global prop, using the `ThemeProvider` inside `'/src/index.js'`.
Notice: Since I am not using Mac, I was not able to load the provided `'scratch'` design file properly, thus had to use some external 3rd party online tools. Because, of that, some colors or border widths might not be 100% accurate, as it might be rendered differently using the 3rd party tools.

## Components layout

All components are localted in `'/src/components'`. I have tried to keep their naming self-explanatory to avoid unnccessary comments.
The app's main area is included in 2 components: `<TransactionDetails />` & `<SendingDetails />`. The first component holds all the main page data and it's props are being passed from `<App />` via the Redux store.
The second component (`SendingDetails`) conatins the 'side bar' info box, that is always fixed to the page (except on mobile - it then goes into 'static' mode and is no longer fixed). It takes it's props directly from the Redux store.
The modal window is being opened via the `<Verification />` component in the `<App />` and it's composed from components:
- `<Overlay />` - the semi-transparent black overlay below the Modal,
- `<OutsideClick />` - the component to handle the clicks outside of the Modal in order to close the Modal,
- Header, Body, and the Footer fo the modal, containing text etc.

## Tests

Testing is done using `JEST + Enzyme`. Tests are located in `'/src/components/tests'`.
To run tests, navigate to the project folder and type `jest` in the terminal.




