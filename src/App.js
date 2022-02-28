import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Header />
			</div>
		</Router>
	);
}
export default App;
