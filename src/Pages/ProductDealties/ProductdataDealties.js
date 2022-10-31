import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap';
import "./style.scss"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';


const ProductdataDealties = () => {
const { id } = useParams();
const [value, setValue] = useState([]); 

console.log(value);

const getUsers = async () => {
    const response = await axios.get(`https://api.pujakaitem.com/api/products/${id}`);
    const fetchData = response.data;
    setValue(fetchData);
  };
useEffect(() => {
    getUsers();
  }, []);
  return (
  <section>
<Container>
  <Row className='pb-5'>
<Col lg = {6} md={6} sm={12} xs={12}>
<img src={value?.image?.[0].url} width = "100%" alt="" height="350px" />
</Col>
<Col className='pt-3 product-data' lg = {6} md={6} sm={12} xs={12}>
  <h1>{value.name}</h1>
  <h4>Company:{value.company}</h4>
  <p>{value.description}</p>
  <h5 className='pt-2'>Price:<span>{value.price}</span></h5>
  <span className='pb-5'>Rating:{value.stars}</span> <br />
  <div className='cart-btn'>
  <button>Buy Now</button>
  <button>Add To Cart</button>
  </div>
</Col>
</Row>
</Container>

</section>
  )
}

export default ProductdataDealties