import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
					<div className="d-flex justify-content-center">
						<div className="circle mx-lg-4"></div>
						<div className="circle mx-lg-4"></div>
						<div className="circle mx-lg-4"></div>
						<div className="circle mx-lg-4"></div>
					</div>
					<div className="d-flex justify-content-center text-center">
						<div className="pill mx-lg-4">Rumah</div>
						<div className="pill mx-lg-4">Interior</div>
						<div className="pill mx-lg-4">Bangunan Lain</div>
						<div className="pill mx-lg-4">Hitung RAB</div>
					</div>
					<div className="d-flex justify-content-center">
						<div className="circle mx-lg-4"></div>
						<div className="circle mx-lg-4"></div>
						<div className="circle mx-lg-4"></div>
					</div>
					<div className="d-flex justify-content-center text-center">
						<div className="pill mx-lg-4">Struktur</div>
						<div className="pill mx-lg-4">Partner</div>
						<div className="pill mx-lg-4">Giivepro</div>
					</div>
				</div>
			</div>
			<div className="panels">
				<div className="panel container d-flex justify-content-around ">
					<p>523</p>
					<p>1025</p>
					<p>1520</p>
				</div>
				<div className="panel-text container d-flex justify-content-around ">
					<p>Antrian</p>
					<p>Diproses</p>
					<p>Selesai</p>
				</div>
			</div>
		</>
	);
};

export default Home;
