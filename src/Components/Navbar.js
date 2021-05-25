import React from 'react';
import LOGO from '../images/toyworld.png'
import {Link} from 'react-router-dom';
// import LoginForm from '..LoginForm';

// import {
// 	Navbar,
// 	NavDropdown,
// 	MenuItem,
// 	NavItem,
// 	Nav,
// 	Popover,
// 	Tooltip,
// 	Button,
// 	Modal,
// 	OverlayTrigger
//   } from 'react-bootstrap';

//en el navBar puedo usar el estado por ser un component
export default class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {
			items: localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[], 
			
		}

	}

	render() {
	  return <div id="header">
	  <div className="container">
		  <div className="left-side">
			  <div id="logo">
				  <a href="/"><img src={LOGO} alt=""/></a>
			  </div>
			  <div className="mmenu-trigger">
				  <button className="hamburger hamburger--collapse" type="button">
					  <span className="hamburger-box">
						  <span className="hamburger-inner"></span>
					  </span>
				  </button>
			  </div>

			  <nav id="navigation" class="style-1">
				  <ul id="responsive">

					  <li><Link to = "/">Inicio</Link></li>
					  <li><Link to = "/productos">Productos</Link></li>
					  <li>
					  
					  
					  </li>
					  <li><Link to = "we">Nosotros</Link></li>
					  <li><Link to = "/contact">Contacto</Link></li>
					  <li><Link to = "/carrito">Compra {this.state.items.length}<i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
				  </ul>
			  </nav>
			  <div className="clearfix"></div>

		  </div>

		  <div className="right-side">
			  <div className="header-widget">
				  <a href='/signIn' className="button border"><Link to = "/signIn">Login</Link></a>
			  </div>
		  </div>

	  </div>
  </div>;
	}
  }

// export default function Navbar(){
//     return (
//         <div id="header">
// 		<div class="container">
// 			<div class="left-side">
// 				<div id="logo">
// 					<a href="/"><img src={LOGO} alt=""/></a>
// 				</div>
// 				<div class="mmenu-trigger">
// 					<button class="hamburger hamburger--collapse" type="button">
// 						<span class="hamburger-box">
// 							<span class="hamburger-inner"></span>
// 						</span>
// 					</button>
// 				</div>

// 				<nav id="navigation" class="style-1">
// 					<ul id="responsive">

// 						<li><Link to = "/">Inicio</Link></li>
// 						<li><Link to = "/properties">Productos</Link></li>
// 						<li>
						
						
// 						</li>
// 						<li><Link to = "we">Nosotros</Link></li>
// 						<li><Link to = "/contact">Contacto</Link></li>
// 						<li><Link to = "/carrito">Compra <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
// 					</ul>
// 				</nav>
// 				<div class="clearfix"></div>

// 			</div>

// 			<div class="right-side">
// 				<div class="header-widget">
// 					<a class="button border"><Link to = "/signIn">Login</Link></a>
// 				</div>
// 			</div>

// 		</div>
// 	</div>
//     );
// }