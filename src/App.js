import './App.css';
import TextToCases from './Components/TextToCases/TextToCases';
import Header from './Components/Header';
import './App.css';
import React from 'react';

 
const App = () => {
  return (
    <div className={ `animeLeft container` }>
      <Header />
      <TextToCases /> 
    </div>
  );
}

export default App;
