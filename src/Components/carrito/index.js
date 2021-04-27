import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Container from './Container';

class Carrito extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <Container/>
          <Footer/>
      </div>
    );
  }
}

export default Carrito;
