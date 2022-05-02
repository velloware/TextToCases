import React from 'react';
import Action from '../../Classes/Actions';
import styles from './Button.module.css';

const Button = (props) => {
  const convertMethod = props.action[0];
  const identifier = props.action[1];
  function execute() {
    Action.execute(convertMethod, identifier);
  }
  
  return (
    <button 
      className={ styles.button } 
      onClick={ execute }
    >
    { props.children }
    </button>
  );
}

export default Button;