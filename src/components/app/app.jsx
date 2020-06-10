import React from 'react';
import Main from '../main/main.jsx';


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentalCount} = props;

  return <Main rentalCount={rentalCount}/>;
};

export default App;
