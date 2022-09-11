import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Registration from "../image/registration.jpg";
import Design from "../image/design.jpg";

const Langkah = () => {
	return (
		<div className="container langkah pb-5">
			<h1 className="title text-center">4 Langkah Menuju Desain Impianmu</h1>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Registration} alt="First slide" />
					<Carousel.Caption>
						<h3 className="caption">Registration</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Design} alt="Second slide" />
					<Carousel.Caption>
						<h3 className="caption">Design Your Home</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Registration} alt="Third slide" />
					<Carousel.Caption>
						<h3 className="caption">Registration</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 rounded-4" src={Design} alt="Fourth slide" />
					<Carousel.Caption>
						<h3 className="caption">Design Your Home</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Langkah;
