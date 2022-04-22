import BGImage from './assets/Decore.svg';
import './App.scss';

import {
  Navbar,
  Header,
  Offer,
  Destinations,
  Book,
  Testimonials,
  Newsletter,
  Footer,
} from './containers';

const App = () => {
  return (
    <div className="App">
      <img src={BGImage} alt="Background SVG" className="bgimage" />
      <Navbar />
      <Header />
      <Offer />
      <Destinations />
      <Book />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
