import React from "react";
import Figure from "react-bootstrap/Figure";
import Foto1 from "../image/foto1.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = () => {
	return (
		<div className="bg-footer footer">
			<div className="row">
				<div className="col justify-content-center p-5 isi d-lg-flex">
					<div className="col col-lg-3">
						<Figure>
							<Figure.Image className="rounded-circle img-fluid figure-img" alt="foto1" src={Foto1} width={80} />
						</Figure>
						<p>Jl dr.Seoradji Tirtonegoro No. Bendogantungan, Sumberejo, Klaten Selatan, Klaten, Jawa Tengah 57424</p>
						<p>Telp.(0272) 3392916 Email : pt.andararejomakmur@gmail.com</p>
					</div>
					<div className="col col-lg-3">
						<h4>Layanan</h4>
						<p>Desain Rumah</p>
						<p>Desain Interior</p>
						<p>Desain Bangunan Lain</p>
						<p>Hitung RAB</p>
						<p>Desain Struktur</p>
						<h4>Simulasi Perhitungan</h4>
					</div>
					<div className="col col-lg-3">
						<h4>Tentang Kami</h4>
						<p>Tentang Perusahaan </p>
						<p>Tim dan Arsitek</p>
						<h4>Informasi</h4>
						<p>Blog</p>
						<p>QNA</p>
						<p>FAQ</p>
						<h4>Kontak</h4>
					</div>
					<div className="col col-lg-3">
						<h4>Follow Us</h4>
						<FaYoutube size={40} />
						<FaInstagram size={40} />
						<FaFacebook size={40} />
						<InputGroup className="mb-3">
							<Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
							<Button variant="outline-secondary" id="button-addon2">
								Button
							</Button>
						</InputGroup>
						<InputGroup className="mb-3">
							<Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
