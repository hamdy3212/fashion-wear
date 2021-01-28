import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CategorySection = ({ items, categories }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <Card className="section mb-5">
            <div className="section-info">
              <h4>{category}</h4>
              <a href={category}>See all</a>
            </div>
            <Row className="justify-content-md-center displayed-items-row">
              {items
                .filter((item) => (item.category === category ? item : null))
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
    </div>
  );
};

export default CategorySection;
