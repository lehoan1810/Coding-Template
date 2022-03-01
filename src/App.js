import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";
import Banner from "./components/Banner";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Header />
				<Banner />
			</div>
		</Router>
	);
}
export default App;
