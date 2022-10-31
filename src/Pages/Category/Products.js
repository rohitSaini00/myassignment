import React from 'react'
import Product_data from './Product_data'
import "./style.scss"

const Products = () => {
  return (
    <section className='category' >
      <div className='category-img mb-5'>
        <div className="img-data">
      <h2>WOMEN</h2>
      <p>New Arrivals Women Collection 2018</p>
      </div>
      </div>
      <Product_data/>
    </section>
  )
}

export default Products