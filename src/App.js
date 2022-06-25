import logo from './logo.svg';
import './App.css';
import BoxDesign from './components/BoxDesign/BoxDesign';

function App(props) {
  const designBoxes = [
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
    {link: 'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg'},
  ]
  return (
    <div className="App">
      <header className='header'>Сайт Марии Дроздовой</header>
      <div className="main">
        {designBoxes.map((item, index) => {
          return (
            <BoxDesign boxNumber={index+1} link={item.link}/>
          )
        })}
        
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
