import React from 'react';
import Header from './components/Header';
import './App.css'
import Box from './components/box';
import Count from './components/counter';
function LandingPage() {
  return (
    <div className= "landing-page">
    <div className="background">
      <Header />
      <Box />
      <Count />
    </div>
    </div>
  );
}

export default LandingPage;
