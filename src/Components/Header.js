import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <ul className={ styles.header }>
        <li className={ styles.active }>TextToCases</li>
        <li>TextToHash</li>
        <li>TextToCodes</li>
      </ul>
    </header>
  )
}

export default Header