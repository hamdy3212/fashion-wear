import { React, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams } from "react-router-dom";
const TypeProducts = () => {
  const { id, cat } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    axios
      .get("/items")
      .then((response) => {
        if (response.data.length > 0) {
          setItems(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={"/" + id}>{id}</Breadcrumb.Item>
        <Breadcrumb.Item active>{cat}</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="section mb-5">
        <Row className="justify-content-md-center displayed-items-row">
          {items
            .filter((item) => item.category === id)
            .filter((item) => item.type === cat)
            .map((item) => {
              return (
                <Col lg={2} md={3} xs={6} className="item" key={item._id}>
                  <Image fluid variant="top" src={item.image} />
                  <span className="item-name">{item.title}</span>
                  <span className="item-price align-bottom">
                    {item.price} EGP
                  </span>
                </Col>
              );
            })}
        </Row>
      </Card>
    </Container>
  );
};

export default TypeProducts;
