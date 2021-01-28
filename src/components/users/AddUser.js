import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AddUser = ({ users, setUsers }) => {
  const [user, setUser] = useState({ username: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const usernames = users.map((user) => {
    return user.username;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernames.includes(user.username) || user.username.length < 3) {
      alert("Erorr");
    } else {
      setUsers([...users, user]);
      axios
        .post("wear-fashion.herokuapp.com/users/add", user)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUername">
        <Form.Label>Add New User</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="User name"
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUser;
