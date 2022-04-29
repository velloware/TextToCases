import React from 'react';
import Button from '../Button/Button';
import styles from './TextToCases.module.css';
import ToCases from '../../Classes/ToCases';

const TextToCases = () => {
    const ID_TEXT_AREA = "#texttocases";
  return (
    <main className={ styles.textToCases }>
      <h1 className={ 'title' }> Text<span className={'titleAux'}>ToCases</span></h1>
      <p>Seu conversor de texto para usar naqulele momento em que o capslock estava ligado e aquele seu email de mil palavras foi escrito todo em  maiúsculo</p>

      <textarea id='texttocases'></textarea>
      <div className={ styles.buttons }>
        <Button action={[ToCases.UpperCase, ID_TEXT_AREA] }>UPPER CASE</Button>
        <Button action={[ToCases.LowerCase, ID_TEXT_AREA] }>lower case</Button>
        <Button action={[ToCases.SentenceCase, ID_TEXT_AREA] }>Sentece case</Button>
        <Button action={[ToCases.TitleCase, ID_TEXT_AREA] }>Title case</Button>
        <Button action={[ToCases.CapitalizeWord, ID_TEXT_AREA] }>Capitalize Word</Button>
        <Button action={[ToCases.ToggleCase, ID_TEXT_AREA] }>Togle Case</Button>
        <Button action={[ToCases.AlternativeCase, ID_TEXT_AREA] }>AlTeRnAtIvE cAsE</Button>
      </div>
    </main>
  );
}

export default TextToCases;