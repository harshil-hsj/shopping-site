
import './App.css';
import React from 'react';
import {Navbar} from './components/Navbar.jsx';
import {Shop} from './pages/shop/shop.jsx';
import {Cart} from './pages/cart/cart.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' element ={<Shop/>}/>
          <Route path = '/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
