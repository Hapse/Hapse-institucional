import React from 'react';

import './App.css';

import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/routes';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
