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

export const authenticateUser = async (email,password) => {
     // const response = await axios.get(`${BASE_URL}/users`);
     // const authenticate = await response.data.find((user) => {
     //      return (user.email === email && user.pasword=== password)
     // });
     // return authenticate
     // const {email, password} = authenticate

     try {
          const response = await axios.get(`${BASE_URL}/users`);
          const user = response.data.find((user) => {
            return user.email === email && user.password === password;
          });
      
          if (user) {
            return user; // Return the authenticated user
          } else {
            return null; // Return null if no user matches
          }
        } catch (error) {
          console.error("Error authenticating user", error);
          throw error; // Propagate error for further handling
        }
     
}

// export const authenticateUser = async (email, password) => {
//      const response = await axios.get(`${BASE_URL}/users`);
//      const authenticate = response.data.find(
//        (user) => user.email === email && user.password === password
//      );
//      // return authenticate;
//    };