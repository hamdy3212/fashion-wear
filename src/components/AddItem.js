import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const AddItem = () => {
  const [item, setItem] = useState({
    username: "hamdy",
    title: "",
    image: "",
    category: "",
    type: "",
    price: "",
    description: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItem({ ...item, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(item);
    e.preventDefault();
    axios
      .post("https://wear-fashion.herokuapp.com/items/add", item)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container
      style={{
        width: "50%",
        border: "1px solid black ",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "50px",
        boxShadow: "5px 5px 10px grey, -5px -5px 10px grey",
      }}
    >
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" onChange={handleChange}>
            <option></option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" name="type" onChange={handleChange}>
            <option></option>
            <option>T-Shirts</option>
            <option>Shirts</option>
            <option>Pullover</option>
            <option>Hoodies</option>
            <option>Sweaters</option>
            <option>Jackets</option>
            <option>Suits</option>
            <option>Pants</option>
            <option>Jeans</option>
            <option>Shoes</option>
            <option>Socks</option>
            <option>Sleepwear</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price (EGP)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="success" size="lg" block onClick={handleSubmit}>
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddItem;
