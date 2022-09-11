import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Rumah1 from "../image/rumah1.jpg";
import Rumah2 from "../image/rumah2.jpg";
import Rumah3 from "../image/rumah3.jpg";

const DesainRumah = () => {
	return (
		<div className="container desain-rumah pb-5">
			<h1 className="title text-center">Desain Rumah</h1>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Rumah1} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Rumah2} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Rumah3} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default DesainRumah;
