
import './App.css';
import React from 'react';
import {Navbar} from './components/Navbar.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/'/>
          <Route path = '/pages'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
