import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

import Home from './route/Home';
import Quote from './route/Quote';

function App() {
  return (
    <div className="App">
      <Calculator />
      <>
        <Navbar />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>

  );
}

export default App;
