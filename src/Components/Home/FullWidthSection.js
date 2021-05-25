import React from 'react'


export default function FullWidthSection () {
    return (
        <section className="fullwidth margin-top-105" data-background-color="#6943c3">

	<h3 className="headline-box">¿Qué estás buscando?</h3>

	<div className="container">
		<div clasName="row">

			<div class="col-md-3 col-sm-6">

				<div className="icon-box-1">

					<div className="icon-container">
						<i className="im im-icon-Office"></i>
						<div className="icon-links">
							{/* <a href="listings-grid-standard-with-sidebar.html">Venta</a> */}
							
						</div>
					</div>

					<h3>SUCURSAL</h3>
					<p>¡Podes acercarte a nuestra sucursal cuando quieras para ver nuestros productos!</p>
				</div>
			</div>

			<div className="col-md-3 col-sm-6">

				<div className="icon-box-1">

					<div className="icon-container">
						<i className="im im-icon-Car-3"></i>
						<div className="icon-links">
							{/* <a href="listings-grid-standard-with-sidebar.html">Ver</a> */}
							
						</div>
					</div>

					<h3>ENVIOS</h3>
					<p>Envios CABA y GBA EXPRESS.</p>
				</div>
			</div>

			<div className="col-md-3 col-sm-6">

				<div className="icon-box-1">

					<div className="icon-container">
						<i className="im im-icon-Dollar"></i>
						<div className="icon-links">
							{/* <a href="listings-grid-standard-with-sidebar.html">Ver</a> */}
							
						</div>
					</div>

					<h3>CUOTAS</h3>
					<p>Contamos con financiacion VISA (Hasta 6 cuotas)</p>
				</div>
			</div>

			<div className="col-md-3 col-sm-6">
				<div className="icon-box-1">

					<div className="icon-container">
						<i className="im im-icon-Clothing-Store"></i>
						<div className="icon-links">
							{/* <a href="listings-grid-standard-with-sidebar.html">Ver</a> */}
							
						</div>
					</div>

					<h3>GARANTÍA</h3>
					<p>Te ofrecemos una devolucion gratuita si el producto no cumple con tus expectativas</p>
				</div>
			</div>

		</div>
	</div>
</section>
    )
}