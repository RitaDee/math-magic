import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Layout from './components/Layout';
import Home from './route/Home';
import Quote from './route/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
