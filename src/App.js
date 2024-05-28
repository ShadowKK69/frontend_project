import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Quiz from './components/Quiz/Quiz'
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {

  const [isDark, setIsDark] = useState(false);
  
  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <div className='app-wrapper'>
        <div className='container' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
