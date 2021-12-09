import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import MenuApp from './components/menu/Menu';

function App() {
  return (
    <Router>
      <MenuApp />
      <Routes />
    </Router>
  );
}

export default App;
