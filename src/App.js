import "./App.css";
import Home from "./components/Home";
import DesainRumah from "./components/DesainRumah";
import MengapaAndara from "./components/MengapaAndara";
import Langkah from "./components/Langkah";
import TidakMenggunakan from "./components/TidakMenggunakan";

function App() {
	return (
		<div>
			<Home />
			<DesainRumah />
			<MengapaAndara />
			<Langkah />
			<TidakMenggunakan />
		</div>
	);
}

export default App;
