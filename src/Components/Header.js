import React from 'react';

export default function Header(){
    return (
      <div className="App">
      <div id="top-bar">
		<div className="container">

			<div className="left-side">

				<ul className="top-bar-menu">
					<li><i className="fa fa-phone"></i><a href="tel:42579699">(011) 4257-9699 </a></li>
					<li><i className="fa fa-envelope"></i> <a href="toyworld@gmail.com">toyworld@gmail.com</a></li>
				</ul>

			</div>
			<div className="right-side">

				{/* <ul className="social-icons">
					<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
					<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
					<li><a className="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
				</ul> */}

			</div>

		</div>
	</div>
	<div className="clearfix"></div>
      </div>
    );
}