import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";

const MainRouter = () => {
	return (
		<Router>
			<NavBar>
				<Link to="/">Home</Link>
				<Link to="/category/1">Ofertas</Link>
				<Link to="/category/2">Hombre</Link>
				<Link to="/category/3">Mujer</Link>
			</NavBar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:categoryId" element={<Home />} />
				<Route path="/item/:itemId" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;
