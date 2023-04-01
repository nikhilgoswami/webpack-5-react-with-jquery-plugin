// src/client/App.js
import React, { useEffect } from 'react';
import FlexSlider from './Flexslider';


const App = ({Router, routerProps}) => {
    useEffect(() => {
      
    }, [])
    
  return (
    <Router {...routerProps}>
      <FlexSlider/>
    </Router>
  );
};

export default App;
