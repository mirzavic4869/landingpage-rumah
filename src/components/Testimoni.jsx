import React from "react";
import Figure from "react-bootstrap/Figure";
import Foto1 from "../image/foto1.png";
import Foto2 from "../image/foto2.png";
import Foto3 from "../image/foto3.png";

const Testimoni = () => {
	return (
		<div id="qna" className="bg-testimoni testimoni">
			<div className="row title-testimoni justify-content-center p-5">Kata Mereka</div>
			<div className="row justify-content-center">
				<div className="col-6 col-lg d-lg-flex justify-content-center gap-5">
					<Figure>
						<Figure.Image className="rounded-circle img-fluid figure-img" alt="foto1" src={Foto1} width={80} />
						<Figure.Caption>James Clark</Figure.Caption>
					</Figure>
					<Figure>
						<Figure.Image className="rounded-circle img-fluid figure-img" alt="foto1" src={Foto2} width={80} />
						<Figure.Caption>David More</Figure.Caption>
					</Figure>
					<Figure>
						<Figure.Image className="rounded-circle img-fluid figure-img" alt="foto1" src={Foto3} width={80} />
						<Figure.Caption>Andy Smith</Figure.Caption>
					</Figure>
					<Figure className="pb-5">
						<Figure.Image className="rounded-circle img-fluid figure-img" alt="foto1" src={Foto1} width={80} />
						<Figure.Caption>Tony Dune</Figure.Caption>
					</Figure>
				</div>
			</div>
		</div>
	);
};

export default Testimoni;
