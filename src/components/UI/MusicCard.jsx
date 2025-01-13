import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import CartContext from '../../store/cart-context';

const MusicCard = ({ albumNumber, title, price, imageUrl }) => {

    let cartCtx=useContext(CartContext);
  
    const addToCart=(albumNumber,title,price,imageUrl)=>{
      cartCtx.addToCart({albumNumber,title,price,imageUrl})
    }
  return (
    <Col xs={6} className="d-flex justify-content-center">
      <Card style={{ width: "300px", borderStyle: "none" }}>
        <Card.Header style={{ textAlign: "center", borderStyle: "none" }}>
          <h3>Album {albumNumber}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Img src={imageUrl} />
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>${price}</Col>
            <Col>
              <Button onClick={()=>addToCart(albumNumber,title,price,imageUrl)}
                style={{
                  background: "rgb(86, 204, 242)",
                  padding: "7px",
                  borderStyle: "none",
                }}
              >
                <h5>Add To Cart</h5>
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default MusicCard;
