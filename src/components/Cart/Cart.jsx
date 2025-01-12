import React, { useState } from 'react'
import { Button, Image, Modal, Table } from 'react-bootstrap'

const Cart = (props) => {

  const [cartElements,setCartElements] =useState([

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]) 

    let total=0;
    const removeItem=(id)=>{
      setCartElements((ps)=>{        
        var newarr=[]
        newarr=ps.filter((c,i)=>{
          if(i!==id){
return c;
          }
          console.log(newarr);
          return false;
        })
        return newarr;
      })

    }

    const cart=cartElements.map((c,i)=>{
      total=total+(c.quantity*c.price)
    return  <tr key={i}>
        <td>
       <Image src={c.imageUrl} style={{width:"90px" ,height:"60px"}}/>
         {c.title}
        </td>
        <td>{c.price}</td>
        <td><input defaultValue={c.quantity} style={{width:"15px" ,height:"60"}} /> <Button onClick={()=>removeItem(i)} variant="danger">Remove</Button> </td>
      </tr>
    })


  return (
    
    <Modal show={props.show} onHide={props.hideCart} style={{width:"2200px"}}>
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
