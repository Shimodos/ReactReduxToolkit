import './JournalItem.css';

function JournalItem({ title, date, text }) {
  const formatedDate = new Intl.DateTimeFormat('uk-UK').format(date);

  return (
    <>
      <h2 className="journal-item__headr">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__data">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </>
  );
}

export default JournalItem;
