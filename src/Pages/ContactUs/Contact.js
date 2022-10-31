import React from 'react';
import "./style.scss"
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
    <section>
    <div className='contact-img mb-4'>
    <div className="contact-data">
    <h2>Contact Us</h2>
    </div>
    </div>
  <Container>
      <Row className='pt-4 pb-4'>
        <Col lg = {6} md={6} sm={12} xs={12}>
          <div className='map'>
        <img src={require("../../assest/map.jpg")} alt=""  width="100%" height="488px"/>
          </div>
        </Col>
        <Col lg = {6} md={6} sm={12} xs={12}>
          <div className='contact-form'>
            <h3 className='pb-3'>Send us your message</h3>
            <Form.Label htmlFor="inputPassword5">Full Name</Form.Label>
      <Form.Control
        type="text"
        id="name"
        aria-describedby="passwordHelpBlock"
      />

      <Form.Label htmlFor="inputPassword5" className='mt-2'>Email</Form.Label>
      <Form.Control
        type="email"
        id="email"
        aria-describedby="passwordHelpBlock"
      />
    <Form.Label htmlFor="inputPassword5" className='mt-2'>Phone No</Form.Label>
      <Form.Control
        type="text"
        id="phone"
        aria-describedby="passwordHelpBlock"
      />
     
        <Form.Label htmlFor="inputPassword5" className='mt-2'>Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Write Message"
          style={{ height: '100px' }}
        />
       <button>Send Message</button>
  </div>
        </Col>
      </Row>
    </Container>
    </section>
    </>
  )
}

export default Contact