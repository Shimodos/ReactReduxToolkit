import styles from './JournalForm.module.css';

import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
  const [formaState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formaState;

  useEffect(() => {
    let timeoutId;
    if (!isValid.title || !isValid.date || !isValid.tag || !isValid.text) {
      timeoutId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDATION' });
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR_FORM' });
    }
  }, [isFormReadyToSubmit]);

  const handleChange = (e) => {
    dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
  };

  const addJournalItem = (e) => {
    e.preventDefault();

    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <>
      <form className={styles['journal-form']} onSubmit={addJournalItem}>
        <div>
          <input
            type="title"
            onChange={handleChange}
            value={values.title}
            name="title"
            className={cn(styles['input-title'], {
              [styles['invalid']]: !isValid.title,
            })}
          />
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="date" className={styles['form-label']}>
            <img src="/calendar.svg" alt="calendar" />
            <span>Date</span>
          </label>
          <input
            type="date"
            onChange={handleChange}
            value={values.date}
            name="date"
            id="date"
            className={cn(styles['input'], { [styles['invalid']]: !isValid.date })}
          />
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="tag" className={styles['form-label']}>
            <img src="/folder.svg" alt="folder" />
            <span>Tags</span>
          </label>
          <input
            type="text"
            name="tag"
            onChange={handleChange}
            value={values.tag}
            id="tag"
            className={styles.input}
          />
        </div>

        <div className={styles['post']}>
          <textarea
            name="text"
            onChange={handleChange}
            value={values.text}
            id=""
            cols="30"
            rows="10"
            className={cn(styles['input'], { [styles['invalid']]: !isValid.text })}
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
