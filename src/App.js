import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Quiz from './components/Quiz/Quiz'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
