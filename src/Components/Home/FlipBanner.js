import React from 'react';

export default function FlipBanner() {
    return (
<a href="#" class="flip-banner parallax" data-background="images/flip-banner-bg.jpg" data-color="#6943c3" data-color-opacity="0.9" data-img-width="2500" data-img-height="1600">
	<div class="flip-banner-content">
		<h2 class="flip-visible">Ayudamos a que encuentres tu juguete ideal.</h2>
		<h2 class="flip-hidden">Ver Productos <i class="sl sl-icon-arrow-right"></i></h2>
	</div>
</a>
    )
}