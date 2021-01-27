import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Men = () => {
  return (
    <>
      <Card className="section">
        <h4 className="mt-3">Categories</h4>
        <Row className="displayed-items-row">
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/fashion/icons/mens/184/Artboard-1-copy-21.png"
              />
              <p>T-Shirts</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/fashion/icons/mens/184/Casual-Shirts-2.png"
              />
              <p>Shirts</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-16.png"
              />
              <p>Pullover</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-15.png"
              />
              <p>Hoodies</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-30.png"
              />
              <p>Sweaters</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-14.png"
              />
              <p>Jackets</p>
            </a>
          </Col>
        </Row>
        <Row className="displayed-items-row">
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-19.png"
              />
              <p>Suits</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/fashion/icons/mens/184/Pants-2.png"
              />
              <p>Pants</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/fashion/icons/mens/184/Jeans-2.png"
              />
              <p>Jeans</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://cdn.shopify.com/s/files/1/0040/5356/5507/products/veldskoen-grey-sole-safari-genuine-leather-shoe1024x1024-womans_200021_1600x.jpg?v=1591914519"
              />
              <p>Shoes</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-18.png"
              />
              <p>Socks</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="/products/">
              <Image
                fluid
                src="https://eg.jumia.is/cms/categories-20/mens-fashion/184/Artboard-1-copy-17.png"
              />
              <p>Sleepwear</p>
            </a>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Men;
