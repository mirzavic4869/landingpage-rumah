import "./App.css";
import Home from "./components/Home";
import DesainRumah from "./components/DesainRumah";
import MengapaAndara from "./components/MengapaAndara";
import Langkah from "./components/Langkah";
import TidakMenggunakan from "./components/TidakMenggunakan";
import Benefits from "./components/Benefits";

function App() {
	return (
		<div>
			<Home />
			<DesainRumah />
			<MengapaAndara />
			<Langkah />
			<TidakMenggunakan />
			<Benefits />
		</div>
	);
}

export default App;
