import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Button from 'react-bootstrap/Button';
import Portfolio from './containers/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
        <Portfolio />
    </div>
  );
}

export default App;
