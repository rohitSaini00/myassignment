import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import { images } from '../../assest/images'
import { BsFillTelephoneForwardFill} from 'react-icons/bs';
import { MdEmail} from 'react-icons/md';
import "./style.scss"
const AppFooter = () => {
  return (
    <section className='app-footer'>
    <div className='app-footer-content'>
        <Container>
        <Row className='footer-container'>
            <Col lg = {6} md={6} sm={6} xs={12}>
                <div className="col-data">
                    <h3>About Us</h3>
                    <img src={images.logo} alt=""/>
                    <p className='pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nisi recusandae corporis ducimus ex nesciunt.</p>
                </div>
            </Col>
            <Col lg = {3} md={3} sm={6} xs={12}>
                <div className="col-data">
                    <h3>Quick Links</h3>
                    <ul className="quick_links">
                       <li><NavLink>Privacy Policy</NavLink></li>
                      <li><NavLink to = "/about">About Us</NavLink></li>  
                     <li><NavLink>Terms & Condition</NavLink></li>   
                      <li><NavLink to = "/contact">Contact Us</NavLink></li>
                      </ul>
                </div>
            </Col>
            <Col lg = {3} md={3} sm={6} xs={12}>
                <div className="col-data">
                    <h3>Contact Us</h3>
                    <div className="address_dealties pb-2">
                       <p><b>Office Adress : </b> C-807, Unitech Business Zone, Golf Course Extn Road, Sector-50, Gurgaon -122018, Haryana, India</p>
                    </div>
                    <div className='contact-d'>
                     <p><b><BsFillTelephoneForwardFill/></b> 0315465421</p>   
                   <p><b><MdEmail/></b> abc@gmail.com</p> 
                    </div>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
</section>
    
  )
}

export default AppFooter