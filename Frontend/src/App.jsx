
import React from 'react';
import MainContent from './Components/MainContent';
import './App.css';
import RegisterHelper from './pages/RegisterHelper';
import Housing from './pages/Housing';
import Navbar from './Components/Navbar';
import Categories from './Pages/Categories';
import Footer from './Components/Footer';
import HelperInfo from './pages/HelperInfo';

function App() {
  return (
    <>
    <Navbar />
    <Categories />
    <Footer /> 
    <RegisterHelper />
    <HelperInfo />
    <Housing />

    </>

  );
}

export default App;
