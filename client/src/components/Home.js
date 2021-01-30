import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import axios from "axios";
import CategorySection from "./CategorySection";
const Fasion = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const categories = ["Men", "Women", "Kids"];
  // const types = [
  //   "T-Shirts",
  //   "Shirts",
  //   "Pullover",
  //   "Hoodies",
  //   "Sweaters",
  //   "Jackets",
  //   "Suits",
  //   "Pants",
  //   "Jeans",
  //   "Sleepwear",
  //   "Socks",
  //   "Shoes",
  // ];

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
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Card className="cover">
        <Card.Img
          className="img-hover-zoom--colorize"
          variant="top"
          src="https://www.bannedalt.com/pub/media/catalog/category/sale-alt.jpg"
        />
      </Card>
      <CategorySection items={items} categories={categories} />
    </Container>
  );
};

export default Fasion;
