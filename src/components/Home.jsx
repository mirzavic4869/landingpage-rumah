import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Figure from "react-bootstrap/Figure";
import { TiArchive } from "react-icons/ti";
import { BsCheckCircleFill, BsHouseFill, BsSearch } from "react-icons/bs";
import { FaBuilding, FaCalculator, FaChair, FaGift, FaPeopleCarry, FaProcedures, FaRoad } from "react-icons/fa";
const Home = () => {
	return (
		<>
			<div className="home"></div>
			<Navbar collapseOnSelect expand="lg" className="bg-transparent ">
				<Container>
					<Navbar.Brand href="#home" className="border rounded-pill py-2 px-4 navbar-brand">
						Proyek Saya
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto nav-link">
							<NavDropdown title="Layanan" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Career</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#features">Simulasi Biaya</Nav.Link>
							<NavDropdown title="Tentang Kami" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Career</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Informasi" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Career</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#features">Kontak</Nav.Link>
						</Nav>
						<Nav>
							<NavDropdown title="Akun" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Profil Saya</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
							</NavDropdown>
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
					<div className="row justify-content-center">
						<div className="d-flex col-6 justify-content-center text-center gap-3">
							<Figure>
								<div className="bg-icon rounded-circle">
									<BsHouseFill color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Rumah</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle">
									<FaChair color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Interior</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle">
									<FaBuilding color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Bangunan Lain</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle">
									<FaCalculator color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Hitung RAB</p>
								</Figure.Caption>
							</Figure>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="d-flex col-6 justify-content-center gap-3 text-center">
							<Figure>
								<div className="bg-icon rounded-circle">
									<FaRoad color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Struktur</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle">
									<FaPeopleCarry color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Partner</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<div className="bg-icon rounded-circle">
									<FaGift color="#F9F5EB" size={25} />
								</div>
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Giivepro</p>
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
		</>
	);
};

export default Home;
