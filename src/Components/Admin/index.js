import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Container from './Container';


class Admin extends Component {
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

export default Admin;