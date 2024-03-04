import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Invest from "./components/Invest";
import Nav from "./components/Nav";


function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={ <Dashboard /> }/>
				<Route path="/invest" element={ <Invest /> }/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
