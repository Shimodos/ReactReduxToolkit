import styles from './JournalForm.module.css';

import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames';

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    tag: true,
    text: true,
  });

  const INITIAL_STATE = {
    title: true,
    date: true,
    tag: true,
    text: true,
  };

  useEffect(() => {
    let timeoutId;
    if (
      !formValidState.title ||
      !formValidState.date ||
      !formValidState.tag ||
      !formValidState.text
    ) {
      //resset formValidState
      timeoutId = setTimeout(() => {
        setFormValidState({
          ...INITIAL_STATE,
        });
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [formValidState]);

  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    e.preventDefault();

    let isFormValid = true;
    if (!formProps.title?.trim().length) {
      setFormValidState((prevState) => ({ ...prevState, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((prevState) => ({ ...prevState, title: true }));
    }
    if (!formProps.date) {
      setFormValidState((prevState) => ({ ...prevState, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((prevState) => ({ ...prevState, date: true }));
    }
    // if (!formProps.tag?.trim().length) {
    //   setFormValidState((prevState) => ({ ...prevState, tag: false }));
    //   isFormValid = false;
    // } else {
    //   setFormValidState((prevState) => ({ ...prevState, tag: true }));
    // }
    if (!formProps.text?.trim().length) {
      setFormValidState((prevState) => ({ ...prevState, text: false }));
      isFormValid = false;
    } else {
      setFormValidState((prevState) => ({ ...prevState, text: true }));
    }
    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
    console.log(formProps);
  };

  return (
    <>
      <form className={styles['journal-form']} onSubmit={addJournalItem}>
        <div>
          <input
            type="title"
            name="title"
            className={cn(styles['input-title'], { [styles['invalid']]: !formValidState.title })}
          />
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="date" className={styles['form-label']}>
            <img src="/calendar.svg" alt="calendar" />
            <span>Date</span>
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className={cn(styles['input'], { [styles['invalid']]: !formValidState.date })}
          />
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="tag" className={styles['form-label']}>
            <img src="/folder.svg" alt="folder" />
            <span>Tags</span>
          </label>
          <input type="text" name="tage" id="tag" className={styles.input} />
        </div>

        <div className={styles['post']}>
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            className={cn(styles['input'], { [styles['invalid']]: !formValidState.text })}
          ></textarea>
        </div>

        <Button
          text="Save"
          onClick={() => {
            console.log('Press');
          }}
        />
      </form>
    </>
  );
}

export default JournalForm;
