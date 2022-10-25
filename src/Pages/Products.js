import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Styles/Products.css";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

const deleteProduct=(product)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
        axios({
          method:'delete',
          url:`http://localhost:9000/products/${product.id}`
        }).then((data)=>{console.log(data);}),
      
       
        
      )
      getData()
    }
  })
  
}
 
 
  
  const getData =()=>{
    axios({
      method: 'get',
      url: 'http://localhost:9000/products'
    }).then((product)=>{
      setProducts(product.data)
    })
  }

  useEffect(()=>{
   getData()
  },[])
  
  return (
    <div className="product-table">
      <Nav.Link as={NavLink} to="/newproduct">
        <Button variant={"success"} className="mb-3">
          Add New Product
        </Button>
      </Nav.Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="items-table">
                <h1 className="fs-3">{product.name}</h1>
                <div className="products-btns">
                  <Nav.Link>
                    <Button
                      variant={"danger"}
                      onClick={() => deleteProduct(product)}
                    >
                      Delete
                    </Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={`/products/${product.id}`}>
                    <Button variant={"primary"}>View</Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={`/editproduct/${product.id}`}>
                    <Button variant={"warning"}>Edit</Button>
                  </Nav.Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
