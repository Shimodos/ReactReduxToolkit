import './App.css';
import Body from './layout/Dody/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map((item) => ({ ...item, date: new Date(item.date) }));
}

function App() {
  const [items, setItems] = useLocalStorage('date');
  const [selectedItem, setSelectedItem] = useState(null);

  const addJournalItem = (item) => {
    if (!item.id) {
      setItems([
        ...mapItems(items),
        {
          ...item,
          date: new Date(item.date),
          id: Math.max(...items.map((item) => item.id), 0) + 1,
        },
      ]);
    } else {
      setItems([
        ...mapItems(items).map((el) => {
          if (el.id === item.id) {
            return { ...item };
          }
          return el;
        }),
      ]);
    }
  };

  const deleteJournalItem = (id) => {
    setItems([...mapItems(items).filter((el) => el.id !== id)]);
  };

  return (
    <UserContextProvider>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null)} />
          <JournalList items={mapItems(items)} setItem={setSelectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addJournalItem} onDelete={deleteJournalItem} data={selectedItem} />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
