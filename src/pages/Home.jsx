import { useEffect, useState } from "react";
import { getProducts } from "../services/service.js";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getProducts()
			.then((res) => {
				setProducts(res.data.products);
			})
			.catch((err) => {})
			.finally(() => setLoading(false));
	}, []);

	return loading ? (
		<LoaderComponent />
	) : (
		<ItemListContainer productsData={products} />
	);
};

export default Home;
