import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./style.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom'
const Product_data = () => {
const [data, setData] = useState([]); 

const getUsers = async () => {
    const response = await axios.get(
      "https://api.pujakaitem.com/api/products"
    );
    const fetchData = response.data;
    setData(fetchData);
  };

useEffect(() => {
    getUsers();
  }, []);
  return (
  <section>
<Container>
<Row>
 <Col lg = {3} md={3} sm={12} xs={12}>
<div className="categories pb-5">
<h4 className='pb-3'>Categories</h4>
<ul className='categories-data'>
 <li>Clothing</li>
 <li>Footwear</li>
 <li>Accessories</li>
 <li>Home Décor</li>
 <li>Kids</li>
</ul>
</div>
<div className='filters'>
<h4 className='pb-2'>Filters</h4>
<div className='m-text pb-32'></div>
<div className='price pt-2'>
  <p className='pb-2'>Price</p>
  <Form.Select size="sm">
        <option value = "select">Select</option>
        <option value="$1000-$2000">$1000-$2000</option>
        <option value="$2000-$3000">$2000-$3000</option>
        <option value="$4000-$5000">$4000-$5000</option>
        <option value="$6000-$8000">$6000-$8000</option>
      </Form.Select>
</div>
<div className='color pt-3'>
<p className='pb-2'>Color</p>
<Form.Select size="sm">
        <option value = "select">Select</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="grey">Grey</option>
      </Form.Select> 
</div>
</div>
 </Col>
 <Col lg = {9} md={9} sm={12} xs={12}>
<Row>
{data.map((list,index)=>{
        return(
     <Col lg = {4} md={4} sm={6} xs={12} key = {index} className = "pt-3 pb-3">
   <div className='product'>
    <img src={list.image} alt="" width="100%" height= "300px" className='pb-2' />
    <NavLink to ={`${"/productdealties"}/${list.id}`} >{list.name}</NavLink><br />
    <span>Price:<b>{list.price}</b></span>
    </div>
 </Col>
)
})}
</Row>
 </Col>
</Row>
</Container>

</section>
  )
}

export default Product_data