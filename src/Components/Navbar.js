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


export default function Navbar(){
    return (
        <div id="header">
		<div class="container">
			<div class="left-side">
				<div id="logo">
					<a href="/"><img src={LOGO} alt=""/></a>
				</div>
				<div class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>
				</div>

				<nav id="navigation" class="style-1">
					<ul id="responsive">

						<li><Link to = "/">Inicio</Link></li>
						<li><Link to = "/properties">Productos</Link></li>
						<li>
						
						
						</li>
						<li><Link to = "we">Nosotros</Link></li>
						<li><Link to = "/contact">Contacto</Link></li>
						<li><Link to = "/carrito">Compra <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
					</ul>
				</nav>
				<div class="clearfix"></div>

			</div>

			<div class="right-side">
				<div class="header-widget">
					<a class="button border"><Link to = "/signIn">Login</Link></a>
				</div>
			</div>

		</div>
	</div>
    );
}