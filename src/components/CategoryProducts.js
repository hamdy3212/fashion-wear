import { React, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Kids from "./Kids";
import Women from "./Women";
import Men from "./Men";
const CategoryProducts = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    axios
      .get("wear-fashion.herokuapp.com/items")
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
  const types = [
    "T-Shirts",
    "Shirts",
    "Pullover",
    "Hoodies",
    "Sweaters",
    "Jackets",
    "Suits",
    "Pants",
    "Jeans",
    "Sleepwear",
    "Socks",
    "Shoes",
  ];
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{id}</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="cover">
        <Card.Img
          className="img-hover-zoom--colorize"
          variant="top"
          src="https://www.bannedalt.com/pub/media/catalog/category/sale-alt.jpg"
        />
      </Card>
      {id === "Kids" ? <Kids /> : null}
      {id === "Men" ? <Men /> : null}
      {id === "Women" ? <Women /> : null}

      {types.map((type) => {
        return (
          <Card className="section">
            <div className="section-info">
              <h4>{type}</h4>
              <a href={"/" + id + "/" + type}>SEE ALL &gt; </a>
            </div>
            <Row className="justify-content-md-center displayed-items-row">
              {items
                .filter((item) => (item.category === id ? item : null))
                .filter((item) => {
                  if (item.type === type) {
                    return item;
                  } else return null;
                })
                .slice(0, 6)
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
        );
      })}
    </Container>
  );
};

export default CategoryProducts;
