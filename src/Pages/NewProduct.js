import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
const [name,setName]=useState('')
const [price,setPrice] = useState(0)
const [items,setItem] = useState(0)
const navigation = useNavigate()
const formSubmit=(e)=>{
  e.preventDefault() ;
  
  if(name.length>0){ axios({
    method:'post',
    url:`http://localhost:9000/products`,
      data: {name: name,
      price: price,
      items: items}
    
  })}
 
  navigation('/products')

  }

  return (
    <div className="mt-5">
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="Product Name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="search"
            placeholder="Product Name"
           onChange={(e)=>{setName(e.target.value)}}
           value={name}
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Product Price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            onChange={(e)=>{setPrice(e.target.value)}}
           value={price}
            
           
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Product Items">
          <Form.Label>Product Items</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Items"
            value={items}
            onChange={(e)=>{setItem(e.target.value)}}
            
           
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;
