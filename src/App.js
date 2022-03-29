import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Features from './Components/Features/Features';
import RestaurantsInPocket from './Components/RestaurantsInPocket/RestaurantsInPocket';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <Features/>
      <RestaurantsInPocket/>
      <Footer />
    </div>
  );
}

export default App;
