import React from 'react';
import IMG from '../../images/carapapa.jpg'
import forkyy from '../../images/forky.webp'
import woodyy from '../../images/woody2.jpg'


export default function Content () {
    return (
        <div className="container">

		
	<div className="row">

		<div className="col-md-12">
			<h3 className="headline margin-bottom-25 margin-top-65">PRÓXIMOS PRODUCTOS</h3>
		</div>


		<div className="col-md-12">
			<div className="carousel">


					{/* <div class="carousel-item">
					<div class="listing-item">

						<a href="single-property-page-1.html" class="listing-img-container">

							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$3.100</span>
								<span class="like-icon with-tip" data-tip-content="Agregar a favoritos"></span>
							</div>

							<div class="listing-carousel">
								<div><img src={IMG} alt=""/></div>
								<div><img src="images/listing-01b.jpg" alt=""/></div>
								<div><img src="images/listing-01c.jpg" alt=""/></div>
							</div>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-1.html">Señor cara de papa</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Disponible en todas las sucursales.
								</a>
							</div>

							<ul class="listing-features">
								<li>Marca <span>Hasbro</span></li>
								<li>Dimensiones <span>25cm x 22cm x 12cm</span></li>
								<li>Material <span>plastico</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Juan Herrera</a>
							</div>

						</div>

					</div>
				</div> */}



				<div className="carousel-item">
					<div className="listing-item">

						<a href="single-property-page-2.html" className="listing-img-container">

							{/* <div class="listing-badges">
								<span>Renta</span>
							</div> */}

							<div className="listing-img-content">
								<span className="listing-price">$3.100</span>
								{/* <span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span> */}

							</div>

							<img src={IMG} alt=""/>

						</a>

						<div className="listing-content">

							<div className="listing-title">
								<h4><a href="single-property-page-2.html">Señor cara de papa</a></h4>
								<a href="https://www.google.com/maps/place/UADE/@-34.6173742,-58.3839982,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccaba6ac89b35:0x1a2dc24cbca665a7!8m2!3d-34.6173786!4d-58.3818095?hl=en" class="listing-address popup-gmaps">
									<i className="fa fa-map-marker"></i>
									Disponible en sucursal
								</a>
								<div className="right-side">
									<div className="header-widget">
										{/* <button class="button border"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button> */}
									</div>
								</div>
							</div>

							<ul className="listing-features">
								<li>Marca <span>Hasbro</span></li>
								<li>Dimensiones <span>25cm x 22cm x 12cm</span></li>
								<li>Material<span>Plastico.</span></li>
							</ul>

							{/* <div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Sergio Rojkind</a>
							</div> */}

						</div>

					</div>
				</div>



				<div className="carousel-item">
					<div className="listing-item">

						<a href="single-property-page-1.html" className="listing-img-container">

							{/* <div class="listing-badges">
								<span>Renta</span>
							</div> */}

							<div className="listing-img-content">
								<span className="listing-price">$2,800</span>
								{/* <span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span> */}

							</div>

							<img src={forkyy} alt=""/>

						</a>

						<div className="listing-content">

							<div className="listing-title">
								<h4><a href="single-property-page-1.html">Forky</a></h4>
								<a href="https://www.google.com/maps/place/UADE/@-34.6173742,-58.3839982,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccaba6ac89b35:0x1a2dc24cbca665a7!8m2!3d-34.6173786!4d-58.3818095?hl=en" class="listing-address popup-gmaps">
									<i className="fa fa-map-marker"></i>
									Disponible en sucursal.
								</a>
								<div className="right-side">
									<div className="header-widget">
										{/* <button class="button border"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button> */}
									</div>
								</div>
							</div>

							<ul className="listing-features">
								<li>Marca <span>Hasbro</span></li>
								<li>Medidas <span>17cm x 5cm x 5cm</span></li>
								<li>Material <span>Plastico</span></li>
							</ul>

							{/* <div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Diego Luna</a>
							</div> */}

						</div>
	

					</div>
				</div>



				{/* <div class="carousel-item">
					<div class="listing-item">


						<a href="single-property-page-3.html" class="listing-img-container">

							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$4000</span>
								<span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span>

							</div>

							<div class="listing-carousel">
								<div><img src={IMG} alt=""/></div>
								<div><img src="images/listing-04b.jpg" alt=""/></div>
							</div>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-3.html">Departamento</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Monte Blanco, Lomas de Chapultepec.
								</a>
							</div>

							<ul class="listing-features">
								<li>Construcción <span>530 m&sup2;</span></li>
								<li>Recámaras <span>2</span></li>
								<li>Baños <span>1</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Juan Sanchez</a>
							</div>

						</div>
	

					</div>
				</div> */}



				<div className="carousel-item">
					<div className="listing-item">


						<a href="single-property-page-1.html" className="listing-img-container">
							{/* <div class="listing-badges">
								<span>Venta</span>
							</div> */}

							<div className="listing-img-content">
								<span className="listing-price">$4,000</span>
								{/* <span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span> */}

							</div>

							<img src={woodyy} alt=""/>
						</a>

						<div className="listing-content">

							<div className="listing-title">
								<h4><a href="single-property-page-1.html">Woody</a></h4>
								<a href="https://www.google.com/maps/place/UADE/@-34.6173742,-58.3839982,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccaba6ac89b35:0x1a2dc24cbca665a7!8m2!3d-34.6173786!4d-58.3818095?hl=en" class="listing-address popup-gmaps">
									<i className="fa fa-map-marker"></i>
									Disponible en sucursal.
								</a>
								<div className="right-side">
									<div className="header-widget">
										{/* <a href="#" class="button border"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a> */}
									</div>
								</div>
							</div>

							<ul className="listing-features">
								<li>Marca <span>Disney</span></li>
								<li>Dimensiones <span> 40cm x 8cm x 8cm</span></li>
								<li>Material <span>Plastico.</span></li>
							</ul>

							{/* <div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Nancy Luz</a>
							</div> */}

						</div>
	

					</div>
				</div>



			</div>
		</div>

	</div>
</div>
    )
}