import Button from '../Button/Button';
import { useState } from 'react';

import './JournalForm.css';

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    tag: true,
    text: true,
  });

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
    if (!formProps.tag?.trim().length) {
      setFormValidState((prevState) => ({ ...prevState, tag: false }));
      isFormValid = false;
    } else {
      setFormValidState((prevState) => ({ ...prevState, tag: true }));
    }
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
      <form className="journal-form" onSubmit={addJournalItem}>
        <input
          type="title"
          name="title"
          style={{ border: formValidState.title ? 'none' : '1px solid red' }}
        />
        <input
          type="date"
          name="date"
          style={{ border: formValidState.date ? 'none' : '1px solid red' }}
        />
        <input
          type="text"
          name="tag"
          style={{ border: formValidState.tag ? 'none' : '1px solid red' }}
        />
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          style={{ border: formValidState.text ? 'none' : '1px solid red' }}
        ></textarea>
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
