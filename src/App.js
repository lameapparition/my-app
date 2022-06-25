import logo from './logo.svg';
import './App.css';
import BoxDesign from './components/BoxDesign/BoxDesign';

function App(props) {
  const designBoxes = [
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    },
    {
      links: [
        'https://portfolio.hse.ru/imagecache/userprojects/93821/1584507_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331730_h1610_m3_s1.jpg',
        'https://portfolio.hse.ru/imagecache/userprojects/118777/2331729_h1610_m3_s1.jpg'
      ]
    }
  ]
  return (
    <div className="App">
      <header className='header'>Сайт Марии Дроздовой</header>
      <div className="main">
        {designBoxes.map((item, index) => {
          return (
            <BoxDesign boxNumber={index + 1} links={item.links} />
          )
        })}

      </div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
