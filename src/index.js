import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  RENTAL_OFFERS_COUNT: 312,
};

ReactDOM.render(
    <App rentalCount={settings.RENTAL_OFFERS_COUNT}/>,
    document.querySelector(`#root`),
);
