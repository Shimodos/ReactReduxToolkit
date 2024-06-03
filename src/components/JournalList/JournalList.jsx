import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

function JournalList({ items }) {
  if (items.length === 0) {
    return <p>No entries, add new entries</p>;
  }

  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {items.sort(sortItems).map((item) => (
        <CardButton key={item.id}>
          <JournalItem title={item.title} date={item.date} text={item.text} />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
