import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import SignIn from './SignIn';

class LogIn extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <SignIn/>
          <Footer/>
      </div>
    );
  }
}

export default LogIn;
