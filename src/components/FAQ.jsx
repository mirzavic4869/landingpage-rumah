import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FAQ = () => {
	return (
		<div id="faq" className="bg-FAQ FAQ">
			<div className="row title-FAQ justify-content-center p-5">FAQ</div>
			<InputGroup className="mx-auto px-4 py-2 px-lg-5 py-lg-2">
				<Form.Control className="daftar" aria-label="Text input with dropdown button" />
				<DropdownButton variant="light" id="input-group-dropdown-2" align="end">
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</DropdownButton>
			</InputGroup>
			<InputGroup className="mx-auto px-4 py-2 px-lg-5 py-lg-2">
				<Form.Control className="daftar" aria-label="Text input with dropdown button" />
				<DropdownButton variant="light" id="input-group-dropdown-2" align="end">
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</DropdownButton>
			</InputGroup>
			<InputGroup className="mx-auto px-4 py-2 px-lg-5 py-lg-2">
				<Form.Control className="daftar" aria-label="Text input with dropdown button" />
				<DropdownButton variant="light" id="input-group-dropdown-2" align="end">
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</DropdownButton>
			</InputGroup>
			<InputGroup className="mx-auto px-4 pt-2 pb-5 px-lg-5 pt-lg-2 pb-lg-5">
				<Form.Control className="daftar" aria-label="Text input with dropdown button" />
				<DropdownButton variant="light" id="input-group-dropdown-2" align="end">
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</DropdownButton>
			</InputGroup>
		</div>
	);
};

export default FAQ;
