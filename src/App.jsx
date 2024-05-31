import './App.css';
// import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import Body from './layout/Dody/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
  const data = [
    {
      title: ' Подготовка к обновлению курсов по React',
      date: new Date(),
      text: 'Все курсы по React будут обновлены до последней версии библиотеки.',
    },
    {
      title: ' iOS 15: первый взгляд на новую операционную систему Apple',
      date: new Date(),
      text: 'Apple представила новую версию операционной системы iOS 15 на конференции WWDC 2021.',
    },
    {
      title: 'vivo представила новый смартфон X60t Pro+ с процессором Snapdragon 888',
      date: new Date(),
      text: 'Компания vivo представила новый флагманский смартфон X60t Pro+ с процессором Snapdragon 888 и тройной камерой.',
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem title={data[0].title} date={data[0].date} text={data[0].text} />
          </CardButton>

          <CardButton>
            <JournalItem title={data[1].title} date={data[1].date} text={data[1].text} />
          </CardButton>

          <CardButton>
            <JournalItem title={data[2].title} date={data[2].date} text={data[2].text} />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
