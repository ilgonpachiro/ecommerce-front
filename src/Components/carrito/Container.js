import React from 'react';
import {Link} from 'react-router-dom';
// import Container from 'Productos/'

export default class Container extends React.Component {
	constructor() {
		super();



		this.state = {
			items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

		}
	}

	render() {
		return (

			<div className="container">
				<div className="row fullwidth-layout">

					<h4 class="headline margin-bottom-25 margin-top-30">LISTA DE PRODUCTOS:</h4>
					<div className="col-md-12">
						<div className="row margin-bottom-15 margin-top-30">
							<div className="listings-container list-layout">
								{this.state.items.map((toy) => {
									return <div className="listing-item" key={toy.id}>
										<div >

											<div className="listing-img-container">

												<div className="listing-carousel">
													<div style={{ textAlign: 'center' }}><img style={{ width: '100%', height: '100%', maxWidth: "200px", margin: "auto 0px" }} src={toy.img} alt="" /></div>
													<div><img src={toy.info.img} alt="" /></div>
													<div><img src={toy.info.img} alt="" /></div>
												</div>
											</div>


										</div>

										<div className="listing-content">
											<div className="lista-compra">
												<ul >
													<li>nombre: {toy.info.name}</li>
													<li>cantidad: {toy.cantidad}</li>
													<li >precio: $ {toy.info.price}</li>
													<li > marca: {toy.info.brand}</li>

												</ul>

											</div>


											{/* <ul className="listing-details">
									<li>Categoria: {toy.category}</li>
									<li>Marca: {toy.brand}</li>
									<li>origen: {toy.origin}</li>
								</ul> */}

											{/* <div className="listing-footer">
									<span><i className="fa fa-calendar-o"></i> En Stock</span>
								</div> */}

										</div>

									</div>

								})};
								<div className="right-side">
									<div className="header-widget">
										<a className="button border"><Link to="/checkout">Confirmar Carrito</Link></a>
									</div>
								</div>
							</div>


						</div>
					</div>

				</div>
			</div>

		)
	}
}