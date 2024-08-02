import React from 'react'
import Homebg from "../assets/img/bg-img.png";
import MensClothing from "../assets/img/men-clothe.png";
import WomensClothing from "../assets/img/women-clothe.png"
import Hero from "../components/hero"
import CategoryCard from '../components/categoryCard';
import "./styles.css"

const Home = ({categoryRef}) => {
  return (
    <div>
        <Hero />
        <hr />
        <h2>Categories</h2>
        <div className='cat-cont' ref={categoryRef}>
            <CategoryCard title ="Men's" imgSrc ={MensClothing} />
            <CategoryCard title = "Women's" imgSrc ={WomensClothing} />
        </div>
    </div>
  )
}

export default Home