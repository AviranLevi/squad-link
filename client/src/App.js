import React from 'react';
import Footer from './components/footer';
import Login from './pages/login';
import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
  return (
    <div className='app center-items'>
      <Navbar />
      <Home />
      <Footer />

      <Login />
    </div>
  );
}

export default App;
