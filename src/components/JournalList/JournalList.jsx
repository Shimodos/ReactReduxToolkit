import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items }) {
  const { userId } = useContext(UserContext);

  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = useMemo(
    () => items.filter((el) => el.userId === userId).sort(sortItems),
    [items, userId],
  );

  if (items.length === 0) {
    return <p>No entries, add new entries</p>;
  }

  return (
    <>
      {filteredItems.map((item) => (
        <CardButton key={item.id}>
          <JournalItem title={item.title} date={item.date} text={item.text} />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
