import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Specs from './components/Specs/Specs';
import Subscribe from './components/Subscribe/Subscribe';
import productImg from './images/product.png';
import productImg2 from './images/product2.png';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home 
      id='home'
      src={productImg} 
      alt='product' 
      title='Mi reality is now going virtual'
      desc='Best in class virtual reality gear to make your everyday experience great. Go check it'
      />
      <Specs />
      <Home 
      id='features'
      src={productImg2} 
      alt='demo'
      title='Real time traffic and activity demographics'
      desc="Monitor and analyze activity status on a large virtual display with great visualization powered by the Xiaomi state-of-the-art hyperGPU technology."
      />
      <Pricing />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;