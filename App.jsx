import './App.css'
import React from 'react';
import HeroSection from './components/HeroSection';
import FounderSection from './components/FounderSection';
import WhyChooseSection from './components/WhyChooseSection';
import CountdownTimer from './components/CountdownTimer';
import CallToAction from './components/CallToAction';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FounderSection />
      <WhyChooseSection />
      <CountdownTimer />
      <CallToAction />
      <Form/>
    </div>
  );
}

export default App;
