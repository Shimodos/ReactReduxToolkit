import './JournalItem.css';

function JournalItem({ title, date, text }) {
  // const title = ' Подготовка к обновлению курсов по React';
  // const date = new Date().toLocaleDateString();
  // const text = 'Все курсы по React будут обновлены до последней версии библиотеки.';

  return (
    <div className="journal-item">
      <h2 className="journal-item__headr">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__data">{date}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </div>
  );
}

export default JournalItem;
