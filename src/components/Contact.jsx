import React, { useState } from 'react'
import { Form,Button, Container } from 'react-bootstrap'

const Contact = () => {
const [userData,setUserData]=useState({
name:"",
email:"",
number:""
})

const handleChange=(event)=>{
    const {id,value}=event.target;

    setUserData((ps)=>{
        return {...ps,[id]:value}
    })
}

const handleSubmit= async(event)=>{
    event.preventDefault();
    console.log(userData);

const response=await fetch("https://e-commerce-35754-default-rtdb.firebaseio.com/contactus.json",{
    method:"POST",
    body:JSON.stringify(userData)
})
const data= await response.json();

console.log(data)

    
}
  return (


    <Container className='mt-2' style={{padding: "30px 0px 40px 40px"}}>
    <Form onSubmit={handleSubmit}>

<Form.Group className="mt-8" >
        <Form.Label>Name</Form.Label>
        <Form.Control  onChange={handleChange}  id="name" type="text" placeholder="Enter Name" />
      </Form.Group>

     <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange}  id="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control onChange={handleChange}  id="number" type="number" placeholder="Enter Phone Number" />
      </Form.Group>
      <Button className='md-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      
      </Container>
  )
}

export default Contact