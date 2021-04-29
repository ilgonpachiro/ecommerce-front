import React from 'react';
import LISTING01 from '../../images/listing-01.jpg'

const toys = [{
	name: 'Among Us',
	img: '/images/among1.webp',
	id: '1',
	price: '1872',
	category: 'Funko',
	brand: 'Fun',
	origin: 'Argentina'
},{
	name: 'Muñeca Heroina',
	img: '../../images/muñeca1.jpg',
	id: '2',
	price: '5980',
	category: 'Niña',
	brand: 'Super Baby',
	origin: 'Argentina'
},{
	name: 'Bebe Unicornio',
	img: '../../images/bebe1.webp',
	id: '3',
	price: '7200',
	category: 'Niña',
	brand: 'Cry Babies',
	origin: 'Argentina'

},{
	name: 'Fluffly',
	img: '../../images/fur1.webp',
	id: '4',
	price: '4998',
	category: 'Niño',
	brand: 'Scruff',
	origin: 'Argentina'
},{
	name: 'Llama Interactiva',
	img: '../../images/llama1.webp',
	id: '5',
	price: '4590',
	category: 'Niño',
	brand: 'Zuru',
	origin: 'Argentina'
},{
	name: 'Barbie',
	img: '../../images/barbie1.webp',
	id: '6',
	price: '10990',
	category: 'Niña',
	brand: 'Barbie',
	origin: 'Argentina'
},{
	name: 'Pokebola',
	img: '../../images/pokemon1.webp',
	id: '7',
	price: '399',
	category: 'Pokemon',
	brand: 'Pokemon',
	origin: 'Argentina'
},{
	name: 'Pelotero Bebe',
	img: '../../images/pelotero1.webp',
	id: '8',
	price: '2100',
	category: 'Bebe',
	brand: 'Toy World',
	origin: 'Argentina'
},{
	name: 'Camioneta Bateria',
	img: '../../images/camioneta1.webp',
	id: '9',
	price: '84999',
	category: 'Niño',
	brand: 'Toy World',
	origin: 'Argentina'
},{
	name: 'Baby Yoda',
	img: '../../images/yoda1.webp',
	id: '10',
	price: '7200',
	category: 'Niño',
	brand: 'Star Wars',
	origin: 'Argentina'
},{
	name: 'Critter',
	img: '../../images/glitter1.webp',
	id: '11',
	price: '7200',
	category: 'Niña',
	brand: 'Cry Babies',
	origin: 'Argentina'
},{
	name: 'Heladera Barbie',
	img: '../../images/heladra1.webp',
	id: '12',
	price: '7969',
	category: 'Niña',
	brand: 'Barbie',
	origin: 'Argentina'
},{
	name: 'Fingerlings',
	img: '../../images/dragon1.webp',
	id: '13',
	price: '5091',
	category: 'Niño',
	brand: 'Fingerlings',
	origin: 'Argentina'
},{
	name: 'Fisher Interactivo',
	img: '../../images/fisher1.webp',
	id: '14',
	price: '18500',
	category: 'Niño',
	brand: 'Fisher Price',
	origin: 'Argentina'
},{
	name: 'Muñeca Pinypon',
	img: '../../images/nena1.webp',
	id: '15',
	price: '1400',
	category: 'Niña',
	brand: 'Pinypon',
	origin: 'Argentina'
}];

const listItems=toys.map((toy)=>{
    return 	<div class="listing-item" key={toy.id}>
	<a href="single-property-page-1.html" class="listing-img-container">

		
		<div class="listing-img-content">
			<span class="listing-price">$ {toy.price}</span>
		</div>

		<div class="listing-carousel">
			<div style={{textAlign: 'center'}}><img style={{width: '100%', height:'auto', maxWidth:"200px", margin:"auto 0px"}} src={toy.img}alt=""/></div>
			<div><img src={toy.img}alt=""/></div>
			<div><img src={toy.img}alt=""/></div>
		</div>
	</a>

	<div class="listing-content">

		<div class="listing-title">
			<h4><a href="single-property-page-1.html">{toy.name}</a></h4>
			
				
			

			<a href="single-property-page-1.html" class="details button border">Details</a>
		</div>

		<ul class="listing-details">
			<li>Categoria: {toy.category}</li>
			<li>Marca: {toy.brand}</li>
			<li>Hecho en: {toy.origin}</li>
		</ul>

		<div class="listing-footer">
			<span><i class="fa fa-calendar-o"></i> En Stock</span>
		</div>

	</div>

</div>
  })

export default function Container() {
    return (
        <div class="container">
	<div class="row fullwidth-layout">

		<div class="col-md-12">

			{/* <!-- Sorting / Layout Switcher --> */}
			<div class="row margin-bottom-15">

				<div class="col-md-6">
					{/* <!-- Sort by --> */}
					<div class="sort-by">
						<label>Ordenar por:</label>

						<div class="sort-by-select">
							<select data-placeholder="Default order" class="chosen-select-no-single" >
								<option>Menor precio</option>
								<option>Mayor precio</option>
							</select>
						</div>
					</div>
				</div>

			</div>


			{/* <!-- Listings --> */}
			<div class="listings-container list-layout">

				{/* <!-- Listing Item --> */}
				{listItems}
				{/* <!-- Listing Item / End --> */}
			</div>
			{/* <!-- Listings Container / End --> */}

			<div class="clearfix"></div>
			{/* <!-- Pagination --> */}
			<div class="pagination-container margin-top-20">
				<nav class="pagination">
					<ul>
						<li><a href="#" class="current-page">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li class="blank">...</li>
						<li><a href="#">22</a></li>
					</ul>
				</nav>

				<nav class="pagination-next-prev">
					<ul>
						<li><a href="#" class="prev">Previous</a></li>
						<li><a href="#" class="next">Next</a></li>
					</ul>
				</nav>
			</div>
			{/* <!-- Pagination / End --> */}

		</div>

	</div>
</div>
    )
}