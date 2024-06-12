import './JournalItem.css';

function JournalItem({ title, text, date }) {
  // Check if date is a valid Date object
  if (!(date instanceof Date && !isNaN(date))) {
    // Throw an error or use a default value
    date = new Date(); // Using current date as default
  }

  // formatedDate
  const formatedDate = new Intl.DateTimeFormat('uk-UA').format(date);

  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </>
  );
}

export default JournalItem;
