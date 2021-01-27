import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Women = () => {
  return (
    <>
      <Card className="section">
        <h4 className="mt-3">Categories</h4>
        <Row className="displayed-items-row">
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://ae01.alicdn.com/kf/HTB12_XLbkL0gK0jSZFxq6xWHVXab.jpg"
              />
              <p>T-Shirts</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://photos6.spartoo.eu/photos/444/4440735/4440735_500_A.jpg"
              />
              <p>Shirts</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://www.dhresource.com/0x0/f2/albu/g3/M00/D7/63/rBVaHVRxXw2AcgTeAAFz1-H2L6M739.jpg"
              />
              <p>Pullover</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://5.imimg.com/data5/GV/UJ/MY-3398781/women-s-hoodies-500x500.jpg"
              />
              <p>Hoodies</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://images-na.ssl-images-amazon.com/images/I/51j6zicnf4L._AC_UX385_.jpg"
              />
              <p>Sweaters</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="data:image/jpeg;base64,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"
              />
              <p>Jackets</p>
            </a>
          </Col>
        </Row>
        <Row className="displayed-items-row">
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpm53cttwuLZ1JFFz1GPK0CEPiRZin0WSNg&usqp=CAU"
              />
              <p>Suits</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://cdn-mdb.head.com/CDN3/G/824660_AN/1/400x400/rebels-pants-women-anthracite.jpg"
              />
              <p>Pants</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://sc01.alicdn.com/kf/UTB8S9cKnFPJXKJkSahVq6xyzFXah/946506085/UTB8S9cKnFPJXKJkSahVq6xyzFXah.jpg_.webp"
              />
              <p>Jeans</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://5.imimg.com/data5/YS/AE/ZI/SELLER-103671406/stylish-women-shoes-jpeg-500x500.jpeg"
              />
              <p>Shoes</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image fluid src="https://static.falke.com/pdmain/430554.jpg" />
              <p>Socks</p>
            </a>
          </Col>
          <Col lg={2} md={3} xs={6} className="item">
            <a href="#">
              <Image
                fluid
                src="https://johnlewis.scene7.com/is/image/JohnLewis/003309965?$rsp-pdp-port-1440$"
              />
              <p>Sleepwear</p>
            </a>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Women;
