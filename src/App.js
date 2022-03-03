import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Header />
				<Banner />
				<Footer />
			</div>
		</Router>
	);
}
export default App;
