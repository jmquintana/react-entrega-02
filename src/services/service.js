import axios from "axios";

export function getProducts() {
	console.log("getProducts");
	return axios.get("https://dummyjson.com/products?limit=10");
}

export function getProductById(id) {
	console.log("getProductById");
	return axios.get("https://dummyjson.com/product/" + id);
}
