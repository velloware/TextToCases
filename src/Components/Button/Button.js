import React from 'react';
import Action from '../../Classes/Actions';
import styles from './Button.module.css';

const Button = (props) => {
  const convertMethod = props.action[0];
  const identifier = props.action[1];
  function execute() {
    if (props.copy === true) {
      Action.copy(identifier);
      return 0;
    } else if (props.clear === true) { 
      Action.clear(identifier);
      return 0;
    }
    
    Action.execute(convertMethod, identifier);
  } 

  return (
    <button 
      className={ styles.button } 
      onClick={ execute }
    >
    {props.icon && <props.icon size={20}/>}
    { props.children }
    </button>
  );
}

export default Button;