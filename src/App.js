import React, { Component , Fragment, useState} from 'react';

//CSS
import './css/bootstrap.css';
import './css/style.css';

import PropertySingle from './Components/PropertySingle';
// import './icons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PropertySingle/>
      </div>
    );
  }
}

export default App;
