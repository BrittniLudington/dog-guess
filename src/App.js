import React from 'react';
import './App.css';
import getStartMenu from './components/start-menu';

function App() {
  return (
    <div className="App">
      {getStartMenu()}
    </div>
  );
}

export default App;
