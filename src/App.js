import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
