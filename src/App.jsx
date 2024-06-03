import { useState } from 'react';
import './App.css';
import Body from './layout/Dody/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: ' Подготовка к обновлению курсов по React',
  //   date: new Date(),
  //   text: 'Все курсы по React будут обновлены до последней версии библиотеки.',
  // },
  // {
  //   id: 2,
  //   title: ' iOS 15: первый взгляд на новую операционную систему Apple',
  //   date: new Date(),
  //   text: 'Apple представила новую версию операционной системы iOS 15 на конференции WWDC 2021.',
  // },
  // {
  //   id: 3,
  //   title: 'vivo представила новый смартфон X60t Pro+ с процессором Snapdragon 888',
  //   date: new Date(),
  //   text: 'Компания vivo представила новый флагманский смартфон X60t Pro+ с процессором Snapdragon 888 и тройной камерой.',
  // },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

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
