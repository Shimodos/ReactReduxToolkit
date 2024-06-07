import { useEffect, useState } from 'react';
import './App.css';
import Body from './layout/Dody/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const date = JSON.parse(localStorage.getItem('date'));
    if (date) {
      setItems(date.map((item) => ({ ...item, date: new Date(item.date) })));
    }
  }, []);

  const addJournalItem = (item) => {
    setItems((oldItem) => [
      ...oldItem,
      {
        title: item.title,
        date: new Date(item.date),
        text: item.text,
        id: Math.max(...oldItem.map((item) => item.id), 0) + 1,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
