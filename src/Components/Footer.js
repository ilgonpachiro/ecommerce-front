import React from 'react';
import LOGO from '../images/toyworld.png'
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <div id="footer" className="sticky-footer">
	{/* <!-- Main --> */}
	<div className="container">
		<div className="row">
			<div className="col-md-5 col-sm-6">
				<img className="footer-logo" src={LOGO} alt=""/>
				<br/><br/>
				<p>Somos una empresa creada para y por los niños, nuestro objetivo es que recuerden su infancia para siempre.</p>
			</div>

			<div className="col-md-4 col-sm-6 ">
				<h4>Links</h4>
				<ul className="footer-links">
					<li><a href="/">Inicio</a></li>
					<li><Link to = "/productos">Productos</Link></li>
					<li><a href="/we">Nosotros</a></li>
					<li><a href="/contact">Contacto</a></li>
				</ul>

				<ul className="footer-links">
					
					<li><Link to = "/productos">Nuestros productos</Link></li>
					
					<li><a href="/contact">Contacto</a></li>
				</ul>
				<div className="clearfix"></div>
			</div>

			<div className="col-md-3  col-sm-12">
				<h4>Contacto</h4>
				<div className="text-widget">
					<span>9 de Julio 266, Quilmes, Buenos Aires.</span> <br/>
					Phone: <span><a href="tel:42579699">(011) 4257-9699 </a></span><br/>
					E-Mail:<span> <a href="mailto:toyworld@gmail.com">toyworld@gmail.com</a> </span><br/>
				</div>

				
			</div>

		</div>

		{/* <!-- Copyright --> */}
		<div className="row">
			<div className="col-md-12">
				<div className="copyrights">© 2021 toyWorld.</div>
			</div>
		</div>

	</div>

</div>
    );
}