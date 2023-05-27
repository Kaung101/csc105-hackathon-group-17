
import React from 'react';
import MainContent from './Components/MainContent';
import './App.css';
import RegisterHelper from './pages/RegisterHelper';
import Navbar from './Components/Navbar';
import Categories from './Pages/Categories';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Categories />
    <Footer />
    <RegisterHelper />

    </>
  );
}

export default App;
