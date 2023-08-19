import { Routes, Route } from "react-router-dom";
import ArtworkList from "./components/ArtworkList/ArtworkList";
import ArtworkDetail from "./components/ArtworkDetail/ArtworkDetail";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ArtworkList />} />
				<Route path="/artwork/:id" element={<ArtworkDetail />} />
			</Routes>
		</div>
	);
}

export default App;
