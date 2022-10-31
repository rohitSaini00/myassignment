import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { products } from '../../my_api';
import "./style.scss"
const Products = () => {
  return (
    <div className='products'>
 <Container>
    <Row>
    {products.map((list,index)=>{
        return(
     <Col lg = {4} md={4} sm={6} xs={12} key = {index} className = "pt-3 pb-3">
   <div className='products-data'>
    <img src={list.img} alt="" width="100%" height= "400px" />
     <button>{list.productName}</button>
   </div>
 </Col>
        )
    })}
    

 </Row>
 </Container>
 </div>
  )
}

export default Products