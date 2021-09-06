import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FeedPage from './pages/FeedPage';
// import { json } from 'express';

function App() {
  const [promos, setPromos] = useState([]);

  const updatePromos = (promoObj) => {
    setPromos = [promoObj, ...promos];
  }

  useEffect(() => {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
    .then( (r) => r.json())
    .then( (r) => {
      setPromos(r.campaigns);
      console.log(promos)
    })
  })


  return (
    <div className="App">
      <FeedPage promos={promos} />
    </div>
  );
}

export default App;
