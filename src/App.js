import "./App.css";
import Home from "./components/Home";
import DesainRumah from "./components/DesainRumah";
import MengapaAndara from "./components/MengapaAndara";
import Langkah from "./components/Langkah";
import TidakMenggunakan from "./components/TidakMenggunakan";
import Benefits from "./components/Benefits";
import Testimoni from "./components/Testimoni";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
	return (
		<div>
			<Home />
			<DesainRumah />
			<MengapaAndara />
			<Langkah />
			<TidakMenggunakan />
			<Benefits />
			<Testimoni />
			<FAQ />
			<CTA />
		</div>
	);
}

export default App;
