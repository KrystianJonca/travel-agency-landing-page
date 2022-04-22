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
