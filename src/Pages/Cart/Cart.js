import React from 'react'
import "./style.scss"
import Container from 'react-bootstrap/Container';

const Cart = () => {
  return (
    <section className='cart2' >
    <div className='cart2-img mb-5'>
    <div className="cart2-img-data">
    <h2>CART</h2>
    </div>
    </div>
   <Container>

    <div className='cart-table'>
    <table className="table">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td className='p-img'><img src={require("../../assest/images/cat/1.jpg")} alt=""  height="150px" /></td>
      <td>Men Tshirt</td>
      <td>$36.00</td>
       <td >0</td>
      <td>$36.00</td>
     </tr>
    <tr>
    <td><img src={require("../../assest/images/cat/2.jpg")} alt="" height="100px" /></td>
      <td>Mug Adventure	</td>
      <td>$16</td>
      <td>0</td>
      <td>$16</td>
</tr>
</tbody>

</table>
<div className='cart_btn pt-3 pb-4'>
<div className='apply-btn'>
  <input type="text" placeholder='Enter Code' />
  <button>Apply Cuppon</button>
</div>

</div>
</div>
</Container>

</section>
  )
}

export default Cart