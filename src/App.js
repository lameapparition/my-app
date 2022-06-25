import logo from './logo.svg';
import './App.css';
import BoxDesign from './components/BoxDesign/BoxDesign';

function App(props) {
  return (
    <div className="App">
      <header className='header'>Сайт Марии Дроздовой</header>
      <div className="main">
        <BoxDesign boxNumber={1}/>
        <BoxDesign boxNumber={2}/>
        <BoxDesign boxNumber={3}/>
        <BoxDesign boxNumber={4}/>
        <BoxDesign boxNumber={5}/>
        <BoxDesign boxNumber={6}/>
        <BoxDesign boxNumber={7}/>
        <BoxDesign boxNumber={8}/>
        <BoxDesign boxNumber={9}/>
        <BoxDesign boxNumber={10}/>
        
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
