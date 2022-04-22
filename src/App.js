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
      <div className="background__decor">
        <Navbar />
        <Header />
      </div>
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
