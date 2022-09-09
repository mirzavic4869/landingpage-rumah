import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Home = () => {
	return (
		<>
			<style type="text/css">
				{`
    .border {
      font-size: 16px
      color: #EAE3D2;  
    }
    `}
			</style>
			<Navbar collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="#home" className="border rounded-pill py-2 px-4">
						Proyek Saya
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
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
								<NavDropdown.Item href="#action/3.1">
									Profil Saya
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="p-5 mb-4 bg-light rounded-bottom jumbotron">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">Custom jumbotron</h1>
					<p className="col-md-8 fs-4">
						Using a series of utilities, you can create this jumbotron, just
						like the one in previous versions of Bootstrap. Check out the
						examples below for how you can remix and restyle it to your liking.
					</p>
				</div>
			</div>
		</>
	);
};

export default Home;
