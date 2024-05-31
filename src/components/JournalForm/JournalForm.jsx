import { useState } from 'react';
import Button from '../Button/Button';

import './JournalForm.css';

function JournalForm() {
  const [indentData, setIndentData] = useState('');

  const inputChange = (e) => {
    setIndentData(e.target.value);
  };

  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    e.preventDefault();
    console.log(formProps);
  };

  return (
    <>
      <form className="journal-form" onSubmit={addJournalItem}>
        <input type="title" name="title" />
        <input type="date" name="data" />
        <input type="text" name="tag" value={indentData} onChange={inputChange} />
        <textarea name="post" id="" cols="30" rows="10"></textarea>
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
