import React from 'react';
import LISTING01 from '../../images/listing-01.jpg'

const toys = [{
	name: 'test',
	img: '../../images/listing-01.jpg',
	id: '1',
	price: '420'
},{
	name: 'test',
	img: '../../images/listing-01.jpg',
	id: '1',
	price: '420'
},{
	name: 'test',
	img: '../../images/listing-01.jpg',
	id: '1',
	price: '420'
}];

const listItems=toys.map((toy)=>{
    return 	<div class="listing-item" key={toy.id}>
	<a href="single-property-page-1.html" class="listing-img-container">

		<div class="listing-badges">
			<span class="featured">Featured</span>
			<span>For Sale</span>
		</div>

		<div class="listing-img-content">
			<span class="listing-price">{toy.price}</span>
			<span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
			<span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
		</div>

		<div class="listing-carousel">
			<div><img src={toy.price}alt=""/></div>
			<div><img src={toy.price}alt=""/></div>
			<div><img src={toy.price}alt=""/></div>
		</div>
	</a>

	<div class="listing-content">

		<div class="listing-title">
			<h4><a href="single-property-page-1.html">{toy.name}</a></h4>
			<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
				<i class="fa fa-map-marker"></i>
				9364 School St. Lynchburg, NY
			</a>

			<a href="single-property-page-1.html" class="details button border">Details</a>
		</div>

		<ul class="listing-details">
			<li>530 sq ft</li>
			<li>1 Bedroom</li>
			<li>3 Rooms</li>
			<li>1 Bathroom</li>
		</ul>

		<div class="listing-footer">
			<a href="#"><i class="fa fa-user"></i> David Strozier</a>
			<span><i class="fa fa-calendar-o"></i> 1 day ago</span>
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

				<div class="col-md-6">
					{/* <!-- Layout Switcher -->? */}
					<div class="layout-switcher">
						<a href="#" class="list"><i class="fa fa-th-list"></i></a>
						<a href="#" class="grid"><i class="fa fa-th-large"></i></a>
						<a href="#" class="grid-three"><i class="fa fa-th"></i></a>
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