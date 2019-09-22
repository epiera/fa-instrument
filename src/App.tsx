import React from 'react';
import './App.css';
import Instrument from './components/Instrument'


const App: React.FC = () => {
  return (
    <div className="App">
      <Instrument name='variometer'></Instrument>
    </div>
  );
}

export default App;
