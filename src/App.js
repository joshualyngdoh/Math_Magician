import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Quote from './Quotes';
import Calculate from './CalculatorPg';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Calculate" element={<Calculate />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
