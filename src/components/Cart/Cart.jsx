import React, { useContext } from 'react'
import { Button, Image, Modal, Table } from 'react-bootstrap'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartCtx=useContext(CartContext);

    let total=0;

    const cart=cartCtx.items.map((c,i)=>{
      total=total+(c.quantity*c.price)
    return  <tr key={i}>
        <td>
       <Image src={c.imageUrl} style={{width:"90px" ,height:"60px"}}/>
         {c.title}
        </td>
        <td>{c.price}</td>
        <td><input defaultValue={c.quantity} style={{width:"15px" ,height:"60"}} /> <Button variant="danger">Remove</Button> </td>
      </tr>
    })


  return (
    
    <Modal show={props.show} onHide={props.hideCart} centered>
<Modal.Header closeButton></Modal.Header>
<Modal.Title>
<h1>Cart</h1>
</Modal.Title>
<Modal.Body>
<Table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
{cart}
<tr>
  <td className="justify-content-end">
  <Button  style={{
                  background: "rgb(86, 204, 242)",
                  padding: "7px",
                  borderStyle: "none"}}>PURCHASE</Button>
  </td>
  <td>  <h3>Total </h3></td>
  <td><h3>${total}</h3></td>
</tr>
  </tbody>
</Table>
</Modal.Body>
    </Modal>
  )
}

export default Cart
