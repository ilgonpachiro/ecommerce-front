import React from 'react';

let toys = [{
	name: 'Among Us',
	img: '/images/among1.webp',
	price: 1872,
	category: 'Funko',
	brand: 'Fun',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Muñeca Heroina',
	img: '../../images/muñeca1.jpg',
	price: 5980,
	category: 'Niña',
	brand: 'Super Baby',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Bebe Unicornio',
	img: '../../images/bebe1.webp',
	price: 7200,
	category: 'Niña',
	brand: 'Cry Babies',
	origin: 'USA',
	cantidadAux: 0

}, {
	name: 'Fluffly',
	img: '../../images/fur1.webp',
	price: 4998,
	category: 'Niño',
	brand: 'Scruff',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Llama Interactiva',
	img: '../../images/llama1.webp',
	price: 4590,
	category: 'Niño',
	brand: 'Zuru',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Barbie',
	img: '../../images/barbie1.webp',
	price: 1090,
	category: 'Niña',
	brand: 'Barbie',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Pokebola',
	img: '../../images/pokemon1.webp',
	price: 399,
	category: 'Pokemon',
	brand: 'Pokemon',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Pelotero Bebe',
	img: '../../images/pelotero1.webp',
	price: 2100,
	category: 'Bebe',
	brand: 'Toy World',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Camioneta Bateria',
	img: '../../images/camioneta1.webp',
	price: 84999,
	category: 'Niño',
	brand: 'Toy World',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Baby Yoda',
	img: '../../images/yoda1.webp',
	price: 7200,
	category: 'Niño',
	brand: 'Star Wars',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Critter',
	img: '../../images/glitter1.webp',
	price: 7200,
	category: 'Niña',
	brand: 'Cry Babies',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Heladera Barbie',
	img: '../../images/heladra1.webp',
	price: 7969,
	category: 'Niña',
	brand: 'Barbie',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Fingerlings',
	img: '../../images/dragon1.webp',
	price: 5091,
	category: 'Niño',
	brand: 'Fingerlings',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Fisher Interactivo',
	img: '../../images/fisher1.webp',
	price: 18500,
	category: 'Niño',
	brand: 'Fisher Price',
	origin: 'USA',
	cantidadAux: 0
}, {
	name: 'Muñeca Pinypon',
	img: '../../images/nena1.webp',
	price: 1400,
	category: 'Niña',
	brand: 'Pinypon',
	origin: 'USA',
	cantidadAux: 0
}]

const uniqueBrands = [];


// toys.map(toy => {
// 	if (uniqueBrands.indexOf(toy.brand) === -1) {
// 		uniqueBrands.push(toy.brand)
// 	}
// });

//la flecha indica funcion lambda
toys.forEach(toy => {
	if (uniqueBrands.indexOf(toy.brand) === -1) {
		uniqueBrands.push(toy.brand)
	}
});

const listBrand = uniqueBrands.map((brand) => {
	return <option key={brand} >{brand} </option>
});

export default class Container extends React.Component {
	constructor() {
		super();



		this.state = {
			sort: localStorage.getItem('sort') ? JSON.parse(localStorage.getItem('sort')) : '',
			toyList: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : toys,
			filter: '',
			items: []

		}
	}



	sorting = (e) => {
		const sorting = e.target.value;
		const sortRes = toys.sort((a, b) => {
			if (sorting === 'all') {
				return a.id > b.id ? 1 : -1
			}
			if (sorting === 'asc') {
				return a.price > b.price ? 1 : -1
			}
			if (sorting === 'desc') {
				return a.price < b.price ? 1 : -1
			}
			return a;
		})



		this.setState({
			sort: sorting,
			toyList: sortRes
		}, () => {
			localStorage.setItem("sort", JSON.stringify(this.state.sort));
			localStorage.setItem("data", JSON.stringify(this.state.toyList));
		})

	}

	filtering = (e) => {
		let selectedBrand = e.target.value;
		if (selectedBrand === 'all') {
			this.setState({
				filter: selectedBrand,
				toyList: toys
			})
		} else {
			this.setState({
				filter: selectedBrand,
				toyList: toys.filter(toy => {
					return toy.brand.indexOf(e.target.value) >= 0
				})
			})
		}
	}
	agregarAlCarro(info, cantidad) {
		if (cantidad && cantidad > 0) {
			let nuevoItem = { info: info, cantidad: cantidad};
			let newCarrito = this.state.items
			newCarrito.push(nuevoItem);
			this.setState({ items: newCarrito });
			localStorage.setItem("items", JSON.stringify(this.state.items))
		}
	}

	render() {

		return (
			<div className="container">
				<div className="row fullwidth-layout">

					<div className="col-md-12">

						{/* <!-- Sorting / Layout Switcher --> */}
						<div className="row margin-bottom-15 margin-top-30">

							<div className="col-md-3">
								{/* <!-- Sort by --> */}
								<div className="sort-by">
									<label>Ordenar por:</label>

									<div className="sort-by-select">
										<select value={this.state.sort} onChange={this.sorting} data-placeholder="Default order" className="chosen-select-no-single" >
											<option value="all">Sin ordenar</option>
											<option value="asc">Menor precio</option>
											<option value="desc">Mayor precio</option>
										</select>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								{/* <!-- Sort by --> */}
								<div className="sort-by">
									<label>Filtrar por:</label>

									<div className="sort-by-select">
										<select value={this.state.filter} onChange={this.filtering} data-placeholder="Default order" className="chosen-select-no-single" >
											<option value="all">Todos</option>
											{listBrand}
										</select>
									</div>
								</div>
							</div>

						</div>


						{/* <!-- Listings --> */}
						<div className="listings-container list-layout">
							{this.state.toyList.map((toy) => {
								return <div className="listing-item" key={toy.id}>
									<div className="listing-img-container">


										<div className="listing-img-content">
											<span className="listing-price">$ {toy.price}</span>
										</div>

										<div className="listing-carousel">
											<div style={{ textAlign: 'center' }}><img style={{ width: '100%', height: 'auto', maxWidth: "200px", margin: "auto 0px" }} src={toy.img} alt="" /></div>
											<div><img src={toy.img} alt="" /></div>
											<div><img src={toy.img} alt="" /></div>
										</div>
									</div>

									<div className="listing-content">

										<div className="listing-title" style={{display: 'flex', paddingRight: '18px', marginBottom: '40px'} } > 
											<h4>{toy.name}</h4>
											<div className="right-side" style={{marginLeft: 'auto' } } >
												<div className="header-widget">

													<button
														onClick={(e) => { this.agregarAlCarro(toy, toy.cantidadAux) }}
														class="button border">
														<i className="fa fa-shopping-cart" aria-hidden="true"></i>
													</button>
													<td className="qtycol" data-label="CANTIDAD">

														<input onChange={event => { toy.cantidadAux = event.target.value }} type="number" step="1" name="var_quantity" defaultValue="0" title="Qty" className="input-text qty text" size="1" min="0"></input>
													</td>
												</div>
											</div>
										</div>

										<ul className="listing-details">
											<li>Categoria: {toy.category}</li>
											<li>Marca: {toy.brand}</li>
											<li>origen: {toy.origin}</li>
										</ul>

										<div className="listing-footer">
											<span><i className="fa fa-calendar-o"></i> En Stock</span>
										</div>

									</div>
								</div>
							})};
			</div>

						<div className="clearfix"></div>
						{/* <!-- Pagination --> */}
						{/* <!-- Pagination / End --> */}

					</div>


				</div>


			</div>


		)
	}
}