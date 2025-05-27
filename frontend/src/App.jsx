import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProviderCTA from './components/ProviderCTA';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';



function App(){
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ProviderCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;