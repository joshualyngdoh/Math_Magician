import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import Calculate from './pages/CalculatorPg';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculate" element={<Calculate />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
