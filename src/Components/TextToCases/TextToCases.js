import React from 'react';
import styles from './TextToCases.module.css';

const TextToCases = () => {
  return (
    <main className={ styles.textToCases }>
      <h1 className={ 'title' }> TextToCases </h1>
      <p>Seu conversor de texto para usar naqulele momento em que o capslock estava ligado e aquele seu email de mil palavras foi escrito todo em  maiúsculo</p>

      <textarea></textarea>
    </main>
  );
}

export default TextToCases