import './App.css';
import TextToCases from './Components/TextToCases/TextToCases';
import Header from './Components/Header';
import './App.css';
import React from 'react';
import Footer from './Components/Footer';

 
const App = () => {
  return (
    <div className={ `animeLeft container` }>
      <Header />
      <TextToCases /> 
      <Footer />
    </div>
  );
}

export default App;
