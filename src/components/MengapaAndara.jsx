import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const MengapaAndara = () => {
	return (
		<div id="about" className="bg">
			<div className="container mengapa-andara p-4">
				<div className="kotak rounded-4 ">
					<div className="row title justify-content-center p-5">Mengapa Andara Arsitek?</div>
					<div className="col d-lg-flex p-3 justify-content-center mx-auto">
						<div className="daftar col col-lg-6">
							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Tampilan bangunan modern dan masa kini dengan beberapa konsep</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Tata Ruang yang lega dan nyaman</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Pencahayaan dan Sirkulasi udara maksimal</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Mendapatkan Perencanaan Keamanan Struktur </p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Quality Control Berlapis, untuk 1 project</p>
							</div>
						</div>
						<div className="daftar col col-lg-6">
							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Optimal untuk Lahan Kecil Ataupun Besar </p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Desain Sesuai Budget atau Permintaan</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Bantuan Koordinasi Gambar Saat Pembangunan</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Mengetahui bangunan sebelum proses pekerjaan</p>
							</div>

							<div className="col d-flex gap-2 justify-content-start mx-auto px-4 ">
								<BsFillCheckCircleFill size={20} color="#C49C48" />
								<p>Garansi Desain 100% Bisa Dibangun</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MengapaAndara;
