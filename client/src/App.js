import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className='app center-items'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
