
import React from 'react';
import './App.css';
import Housing from './pages/Housing';
import Navbar from './Components/Navbar';
import Categories from './Pages/Categories';
import Footer from './Components/Footer';
import HelperInfo from './pages/HelperInfo';
import Register from './pages/Register';
import LoginHelper from './pages/LoginHelper';


function App() {
  return (
    <>
    <Navbar />
    <Categories />
    <Footer /> 
    <RegisterHelper />
    <HelperInfo />
    <Housing />
      <Register />

    </>

  );
}

export default App;
