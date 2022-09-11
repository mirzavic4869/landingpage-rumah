import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Figure from "react-bootstrap/Figure";
import Foto1 from "../image/foto1.png";
import { TiArchive } from "react-icons/ti";
import { BsCheckCircleFill, BsHouseFill, BsSearch } from "react-icons/bs";
import { FaBuilding, FaCalculator, FaChair, FaGift, FaPeopleCarry, FaProcedures, FaRoad } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div className="home">
			<Navbar collapseOnSelect expand="lg" className="bg-transparent ">
				<Container>
					<Navbar.Brand href="#home" className="border rounded-pill py-2 px-4 navbar-brand">
						Proyek Saya
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto nav-link">
							<NavDropdown title="Layanan" id="collasible-nav-dropdown">
								<Link to="desainrumah" smooth={true} duration={500}>
									<NavDropdown.Item>Desain Rumah</NavDropdown.Item>
								</Link>
								<NavDropdown.Item>Desain Interior</NavDropdown.Item>
								<NavDropdown.Item>Desain Bangunan lain</NavDropdown.Item>
								<NavDropdown.Item>Hitung RAB</NavDropdown.Item>
								<NavDropdown.Item>Desain Struktur</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#features">Simulasi Biaya</Nav.Link>
							<NavDropdown title="Tentang Kami" id="collasible-nav-dropdown">
								<Link to="about" smooth={true} duration={500}>
									<NavDropdown.Item>Tentang Perusahaan</NavDropdown.Item>
								</Link>
								<NavDropdown.Item href="#action/3.1">Tim dan Arsitek</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Informasi" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
								<Link to="qna" smooth={true} duration={500}>
									<NavDropdown.Item>QNA</NavDropdown.Item>
								</Link>
								<Link to="faq" smooth={true} duration={500}>
									<NavDropdown.Item>FAQ</NavDropdown.Item>
								</Link>
							</NavDropdown>
							<Link to="footer" smooth={true} duration={500}>
								<Nav.Link href="#features">Kontak</Nav.Link>
							</Link>
						</Nav>
						<Nav>
							<NavDropdown className="pt-lg-3 pe-lg-3" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Profil Saya</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
							</NavDropdown>
							<Figure className="pt-lg-2">
								<Figure.Image className="rounded-circle img-fluid figure-img" alt="foto1" src={Foto1} width={50} />
							</Figure>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="p-5 mb-4 bg-light rounded-bottom jumbotron">
				<div className="container-fluid py-5">
					<h1 className="display-5 text-white fs-32">
						Hai kamu, <span className="fw-bold fs-40 ">mau desain apa?</span>
					</h1>
					<div className="search mx-auto d-flex justify-content-center gap-1 gap-lg-2 ">
						<BsSearch />
						<p>Desain Rumah, Interior, Bangunan Lainnya, Struktur Hitung RAB</p>
					</div>
					<div className="row justify-content-center ">
						<div className="d-flex col-6 justify-content-center text-center gap-3 gap-lg-5 mt-lg-2">
							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<BsHouseFill color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center">Rumah</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<FaChair color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center">Interior</p>
								</Figure.Caption>
							</Figure>

							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<FaBuilding color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center">Other Building</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<FaCalculator color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center">Hitung RAB</p>
								</Figure.Caption>
							</Figure>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="d-flex col-6 justify-content-center gap-3 gap-lg-5 text-center">
							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<FaRoad color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center">Struktur</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<FaPeopleCarry color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center">Partner</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle pt-lg-4">
									<FaGift color="#F9F5EB" size={28} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center ">Giivepro</p>
								</Figure.Caption>
							</Figure>
						</div>
					</div>
				</div>
			</div>
			<div className="info-panel d-flex justify-content-center text-center">
				<div className="col">
					<h3>523</h3>
					<div className="col d-flex justify-content-center gap-1">
						<TiArchive />
						<p>Antrean</p>
					</div>
				</div>
				<div className="col">
					<h3>1025</h3>
					<div className="col d-flex justify-content-center gap-1">
						<FaProcedures />
						<p>Diproses</p>
					</div>
				</div>
				<div className="col">
					<h3>1520</h3>
					<div className="col d-flex justify-content-center gap-1">
						<BsCheckCircleFill />
						<p>Selesai</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
