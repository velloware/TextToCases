import React from 'react';
import Button from '../Button/Button';
import styles from './TextToCases.module.css';
import ToCases from '../../Classes/ToCases';
import Actions from '../../Classes/Actions';
import { AiOutlineClear } from 'react-icons/ai';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BiCaretDown } from 'react-icons/bi';

const TextToCases = () => {
  const ID_TEXT_AREA = "#texttocases";

  return (<>
    <main className={ styles.textToCases }>
      <h1 className={ 'title' }> Text<span className={'titleAux'}>ToCases</span></h1>
      <p>Your text converter to use at that moment when capslock was on and that thousand-word email of yours was written in all caps</p>

      <textarea id='texttocases' spellcheck="false"></textarea>
      <div className={ styles.buttons }>
        <Button action={[ToCases.UpperCase, ID_TEXT_AREA] }>UPPER CASE</Button>
        <Button action={[ToCases.LowerCase, ID_TEXT_AREA] }>lower case</Button>
        <Button action={[ToCases.SentenceCase, ID_TEXT_AREA] }>Sentece case</Button>
        <Button action={[ToCases.TitleCase, ID_TEXT_AREA] }>Title case</Button>
        <Button action={[ToCases.ToggleCase, ID_TEXT_AREA] }>Togle Case</Button>
        <Button action={[ToCases.AlternativeCase, ID_TEXT_AREA] }>AlTeRnAtIvE cAsE</Button>

        <Button 
          icon={AiOutlineClear}
          copy={true}
          action={[Actions.copy, ID_TEXT_AREA] }
        ></Button>
        <Button
          icon={MdOutlineContentCopy}
          clear={true}
          action={[Actions.clear, ID_TEXT_AREA] }
        >
        </Button>
      </div>
    </main>
    <section>
      <span >more info <BiCaretDown size={20}/></span>
        <h1>TextToCases</h1>
        <h3 >What does each conversion do?</h3>

        <h2>Upper Case</h2>
        <p>Capital letters are also known as capital letters. The letters indicate to the reader that something is important or significant.</p>

        <h2>Lower Case</h2>
        <p>Use lowercase letters for all letters other than the first in a sentence, provided that there is no required use for uppercase letters in the sentence.</p>

        <h2>Sentence case</h2>
        <p>Sentence cases can be part of a report, webpage, article, or another piece of work. Keep in mind that in addition to titles, sentence case rules can apply to subtitles, headings, and subheadings. When you use a sentence case, you capitalize just the first letter of the first word in the title.</p>

        <h2>Title case</h2>
        <p>Title case or headline case is a style of capitalization used for rendering the titles of published works or works of art in English. When using title case, all words are capitalized except for minor words unless they are the first or last word of the title</p>

        <h2>Toggle Case</h2>
        <p>ToggleCase is text that is converted to a mixed case version of the text. For instance, the word "dictionary" could be converted into "dIctIOnAry". Related information. Use the online text converter to convert your text to uppercase, lowercase, ToggleCase, and other modifications. Case, Toggle, Typography terms. Was this page useful?</p>

        <h2>Alternative case</h2>
        <p>Alternative-case release scenarios. The acceptable alternative scenario for a covered process must be one that is more likely to occur than the worst-case scenario and that reaches an endpoint off-site, unless no such scenario exists.</p>
    </section>
    </>
  );
}

export default TextToCases;