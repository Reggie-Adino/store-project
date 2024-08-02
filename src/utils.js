import axios from "axios";


export const ALLOWED_CATEGORIES = {
     MENS:"men's clothing",
     WOMENS: "women's clothing"
 }
 
const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async() => {
     const response = await axios.get(`${BASE_URL}/products`)
     const products = response.data;
     return products
}

export const fetchCategoryProducts = async (category) => {
  const response = await axios.get(`${BASE_URL}/products/category/${category}`)
  return response.data
}