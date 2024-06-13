import './App.css';
import Body from './layout/Dody/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map((item) => ({ ...item, date: new Date(item.date) }));
}

function App() {
  const [items, setItems] = useLocalStorage('date');

  const addJournalItem = (item) => {
    setItems([
      ...mapItems(items),
      {
        title: item.title,
        text: item.text,
        date: new Date(item.date),
        id: Math.max(...items.map((item) => item.id), 0) + 1,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={mapItems(items)} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
