import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const TidakMenggunakan = () => {
	return (
		<div className="bg">
			<div className="container mengapa-andara p-4">
				<div className="kotak rounded-4 ">
					<div className="row title justify-content-center p-5">Tidak Menggunakan Jasa Arsitek ?</div>
					<div className="col d-lg-flex p-3 justify-content-center mx-auto">
						<div className="daftar col col-lg-6">
							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Tampilan Bangunan tidak sesuai ekspektasi</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Miskomunikasi dan kecerobohan dalam desain</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Kesalahan struktur yang membuat bangunan rawan roboh</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Pelaksana atau kontraktor tidak memiliki acuan</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Bangunan yang terkesan asal jadi</p>
							</div>
						</div>
						<div className="daftar col col-lg-6">
							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Tata ruang semrawut</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Pemborosan uang, waktu dan tenaga akibat bongkar tanpa henti</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Dibangun mahal, dijual tidak laku karena tidak menarik</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Bagunan tidak nyaman, pencahayaan sangat kurang, dan lembab </p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillXCircleFill size={20} color="#C49C48" />
								<p>Gampang ditipu karena tanpa gambar</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TidakMenggunakan;
