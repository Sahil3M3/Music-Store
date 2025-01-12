import React from 'react';
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Row style={{ backgroundColor: "rgb(86, 204, 242)" }}>
        <Col>
          <div
            style={{
              fontFamily: "Times New Roman",
              color: "white",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: "0" }}>
              The Generics
            </h1>
          </div>
        </Col>
        <Col style={{ paddingLeft: "400px", paddingTop: "30px" }}>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
            style={{ width: "40px", height: "40px" }}
            alt="YouTube"
          />
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
            style={{ width: "40px", height: "40px" }}
            alt="Spotify"
          />
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
            style={{ width: "40px", height: "40px" }}
            alt="Facebook"
          />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
