import React, {useEffect, useState} from 'react'
import { fetchProducts, fetchCategoryProducts } from '../utils'
import ProductCard from "../components/productCard"
import { ALLOWED_CATEGORIES } from '../utils'
import {useParams} from 'react-router-dom'


const Products = ({setCartItems}) => {

    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const  [activeCat, setActiveCat] = useState("All")

    const {category} = useParams()

    const handleFilterProducts = (productCategory = null) => {
        if (productCategory) {
          const filterProducts = allProducts.filter(
            (product) => product.category === productCategory
          );
          setProducts(filterProducts);
        } else {
          setProducts(allProducts);
        }
      };

    useEffect(() => {
       if(!category) {
        const getProducts = async () => {
            const response = await fetchProducts();
            setProducts(response);
            setAllProducts(response);
          }
          getProducts().catch((e) => console.error("we have an error", e));
       } else {
        const getCategoryProducts =  async () => {
          const response = await fetchCategoryProducts(category)
          setProducts(response)
        }
        getCategoryProducts().catch(e => console.error(e, "error"))
       }
     
    },[category])

  return (
    <div className="products-cont">
{!category ? <div className="category-select">
            <span className={`select-cat-span ${activeCat === "All" ? "cat-active" :""} `} onClick={() => {handleFilterProducts()
                setActiveCat("All")
            }} >All</span>
            <span className={`select-cat-span ${activeCat === "women's" ? "cat-active" :""} `}  onClick={() => {handleFilterProducts(ALLOWED_CATEGORIES.WOMENS) 
                            setActiveCat("women's")
            }}>Womens</span>
            <span className={`select-cat-span ${activeCat === "men's" ? "cat-active" :""} `}  onClick={() => {handleFilterProducts(ALLOWED_CATEGORIES.MENS)
                            setActiveCat("men's")
            }}>Mens</span>
        </div> : <div className="category-select">
            <span>{category}</span>
        </div> }
        

<div className='product-card-cont'>
        {products.length > 0 && products.map((product) => product.category !== "jewelery" && product.category !== "electronics" && < ProductCard key={product.id} id={product.id}  rating={product.rating} img={product.image} categoryName={product.category} title={product.title} description={product.description} price={product.price} setCartItems={setCartItems}/>) }
    </div>
    </div>
    
  )
}

export default Products