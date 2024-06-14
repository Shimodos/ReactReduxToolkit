import styles from './JournalForm.module.css';

import Button from '../Button/Button';
import { useEffect, useReducer, useRef, useContext } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';

function JournalForm({ onSubmit, data }) {
  const [formaState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formaState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();
  const { userId } = useContext(UserContext);

  const focusInvalidInput = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatchForm({ type: 'SET_VALUE', payload: { ...data } });
  }, [data]);

  useEffect(() => {
    let timeoutId;
    if (!isValid.title || !isValid.date || !isValid.tag || !isValid.text) {
      focusInvalidInput(isValid);
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
      dispatchForm({ type: 'SET_VALUE', payload: { userId } });
    }
  }, [isFormReadyToSubmit]);

  useEffect(() => {
    dispatchForm({ type: 'SET_VALUE', payload: { userId } });
  }, [userId]);

  const handleChange = (e) => {
    dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
  };

  const addJournalItem = (e) => {
    e.preventDefault();

    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <Input
          type="title"
          ref={titleRef}
          onChange={handleChange}
          value={values.title}
          name="title"
          appearence="title"
          isValid={isValid.title}
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/calendar.svg" alt="calendar" />
          <span>Date</span>
        </label>
        <Input
          type="date"
          ref={dateRef}
          onChange={handleChange}
          value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
          name="date"
          id="date"
          isValid={isValid.date}
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="folder" />
          <span>Tags</span>
        </label>
        <Input type="text" name="tag" onChange={handleChange} value={values.tag} id="tag" />
      </div>

      <div className={styles['post']}>
        <textarea
          name="text"
          ref={textRef}
          onChange={handleChange}
          value={values.text}
          id=""
          cols="30"
          rows="10"
          className={cn(styles['input'], { [styles['invalid']]: !isValid.text })}
        ></textarea>
      </div>

      <Button
        onClick={() => {
          console.log('Press');
        }}
      >
        Save
      </Button>
    </form>
  );
}

export default JournalForm;
