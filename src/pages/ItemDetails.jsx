import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { getProductById } from "../services/service.js";
// import axios from "axios";

// function getProductById(id) {
// 	return axios.get(`https://dummyjson.com/products/${id}`);
// }

const ItemDetails = () => {
	const [product, setProduct] = useState({});
	const { itemId } = useParams();

	useEffect(() => {
		getProductById(itemId)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((err) => {});
	}, [itemId]);

	return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
