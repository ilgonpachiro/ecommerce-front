import React from 'react';
import LOGO from '../images/toyworld.jpeg'

export default function Footer(){
    return (
        <div id="footer" class="sticky-footer">
	{/* <!-- Main --> */}
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-sm-6">
				<img class="footer-logo" src={LOGO} alt=""/>
				<br/><br/>
				<p>Somos una empresa creada para y por los niños, nuestro objetivo es que recuerden su infancia para siempre.</p>
			</div>

			<div class="col-md-4 col-sm-6 ">
				<h4>Links</h4>
				<ul class="footer-links">
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Productos</a></li>
					<li><a href="#">Nosotros</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>

				<ul class="footer-links">
					<li><a href="#">Blog</a></li>
					<li><a href="#">Nuestros productos</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>
				<div class="clearfix"></div>
			</div>

			<div class="col-md-3  col-sm-12">
				<h4>Contacto</h4>
				<div class="text-widget">
					<span>9 de Julio 266, Quilmes, Buenos Aires.</span> <br/>
					Phone: <span><a href="tel:42579699">(011) 4257-9699 </a></span><br/>
					E-Mail:<span> <a href="mailto:toyworld@gmail.com">toyworld@gmail.com</a> </span><br/>
				</div>

				<ul class="social-icons margin-top-20">
					<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
					<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
					<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
				</ul>
			</div>

		</div>

		{/* <!-- Copyright --> */}
		<div class="row">
			<div class="col-md-12">
				<div class="copyrights">© 2021 toyWorld.</div>
			</div>
		</div>

	</div>

</div>
    );
}