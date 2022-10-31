import React from 'react'
import "./style.scss"
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap';
function About() {
  return (
    <section>
    <div className='about-img mb-4'>
    <div className="about-data">
    <h2>About Us</h2>
    </div>
    </div>
    <Container>
      <Row>
        <Col lg = {5} md={5} sm={12} xs={12} className = "pb-4">
          <img src={require("../../assest/images/about/1.jpg")} alt="" width="100%" height="452px" />
        </Col>
        <Col lg = {7} md={7} sm={12} xs={12} className="pt-3">
          <h3>Our Story</h3>
          <p className='pb-3'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
          <div className='para-2 mt-4'>
          <p className='mypara'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
           <span>- Steve Job’s</span>
           </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default About