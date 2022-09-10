import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Figure from "react-bootstrap/Figure";
import { TiArchive } from "react-icons/ti";
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
					<div className="search mx-auto ">Desain Rumah, Interior, Bangunan Lainnya, Struktur Hitung RAB </div>

					<div className="row justify-content-center">
						<div className="d-flex col-6 justify-content-center gap-3">
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Rumah</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Interior</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Bangunan Lain</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Hitung RAB</p>
								</Figure.Caption>
							</Figure>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="d-flex col-6 justify-content-center gap-3">
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Struktur</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
								<Figure.Caption className="figure-caption">
									<p className="text-center text-white">Partner</p>
								</Figure.Caption>
							</Figure>
							<Figure>
								<Figure.Image width={42} height={42} alt="icon panel" src="https://i.pinimg.com/736x/0e/0d/11/0e0d11538b7d3e4128b5c6ea39fb3d10.jpg" className="rounded-circle" />
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
					<div className="col d-flex justify-content-center">
						<TiArchive />
						<p>Antrean</p>
					</div>
				</div>
				<div className="col">
					<h3>1025</h3>
					<div className="col d-flex justify-content-center ">
						<TiArchive />
						<p>Diproses</p>
					</div>
				</div>
				<div className="col">
					<h3>1520</h3>
					<div className="col d-flex justify-content-center ">
						<TiArchive />
						<p>Selesai</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
