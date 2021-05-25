import React from 'react';
import {
  Router,
  Route,
  HashRouter
} from 'react-router-dom';
import history from './history';
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import We from '../Components/We'
import Carrito from '../Components/carrito'
import Productos from '../Components/Productos'
import PropertySingle from '../Components/PropertySingle'
import LogIn from '../Components/SignIn'
import Admin from '../Components/Admin'
import CheckOut from '../Components/CheckOut'


const Routing = () => {
  return (
    <HashRouter>
      <Structure/>
    </HashRouter>
  )
}

const Structure = () => {
  return( <div>
  <Main/>
  </div>
  )
}

const Main = () => {
  history.listen(_ => {
    window.scrollTo(0, 0)  
    })
  return (
    <Router history={history}>
    <div>
   <Route exact path = '/' component={Home}/>
   <Route path = '/contact' component={Contact}/>
   <Route path = '/carrito' component={Carrito}/>
   <Route path = '/we' component={We}/>
   <Route path = '/productos' component={Productos}/>
   <Route path = '/signIn' component={LogIn}/>
   <Route path = '/property-single' component={PropertySingle}/>
   <Route exact path = '/newPath' component={Admin}/>
   <Route exact path = '/checkout' component={CheckOut}/>
    </div>
    </Router> 
  )
}

export default (Routing);