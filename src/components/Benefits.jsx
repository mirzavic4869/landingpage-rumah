import React from "react";
import { BsCameraVideoFill, BsCloudFill, BsCoin, BsFileImage, BsGraphUp, BsGrid1X2Fill, BsHouseDoorFill, BsImage, BsLampFill, BsPinMapFill, BsPrinterFill, BsShieldFillCheck, BsTable, BsWallet, BsWalletFill, BsWind } from "react-icons/bs";
import Card from "react-bootstrap/Card";
const Benefits = () => {
	return (
		<div className="container p-5">
			<div className="benefits">
				<Card>
					<Card.Header className="title-benefits text-center">Apa yang Anda Dapatkan ?</Card.Header>
					<Card.Body>
						{/* <div className="row title-benefits justify-content-center text-center p-3">Apa yang Anda Dapatkan ?</div> */}
						<div className="isi row justify-content-center">
							<div className="col-6 col-lg-3 text-center">
								<BsImage size={30} color="#C49C48" />
								<p>Tampilan modern masa kini</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsCloudFill size={30} color="#C49C48" />
								<p>Tata Ruang lega dan nyaman</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsShieldFillCheck size={30} color="#C49C48" />
								<p>Keamanan dalam keindahan</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsGrid1X2Fill size={30} color="#C49C48" />
								<p>Mengoptimalkan Lahan Kecil atau Besar</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsHouseDoorFill size={30} color="#C49C48" />
								<p>Interior yang disesuaikan dengan kenyaman</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsLampFill size={30} color="#C49C48" />
								<p>Pencahayaan yang maksimal</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsWind size={30} color="#C49C48" />
								<p>Sirkulasi udara optimal</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsCoin size={30} color="#C49C48" />
								<p>Sesuai budget</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsWalletFill size={30} color="#C49C48" />
								<p>Pembayaran yang mudah</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsGraphUp size={30} color="#C49C48" />
								<p>Quality Control</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsFileImage size={30} color="#C49C48" />
								<p>Mendapatkan gambar 2D</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsFileImage size={30} color="#C49C48" />
								<p>Mendapatkan gambar 3D</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsCameraVideoFill size={30} color="#C49C48" />
								<p>Mendapatkan Video model 3D</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsPrinterFill size={30} color="#C49C48" />
								<p>Mendapatkan Hasil cetak dan softcopy</p>
							</div>
							<div className="col-6 col-lg-3 text-center">
								<BsPinMapFill size={30} color="#C49C48" />
								<p>Kunjungan Luar Daerah, Seluruh Indonesia</p>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Benefits;
