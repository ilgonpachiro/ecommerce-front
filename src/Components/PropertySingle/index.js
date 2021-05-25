import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Body from '../Body';




class PropertySingle extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <Body/>
          <Footer/>
      </div>
    );
  }
}

export default PropertySingle;
