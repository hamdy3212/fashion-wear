import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import AddUser from "./AddUser";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteUser = (id) => {
    axios
      .delete("http://localhost:5000/users/" + id)
      .then((response) => console.log(response.data));
    setUsers(users.filter((user) => user._id != id));
  };
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Col className="mx-auto" xs="12" lg="6" style={{ textAlign: "center" }}>
          <AddUser users={users} setUsers={setUsers} />
        </Col>
        <Col
          className="mx-auto mt-5"
          xs="12"
          lg="6"
          style={{ textAlign: "center" }}
        >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteUser(user._id)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Container>
    );
  }
};

export default Users;
