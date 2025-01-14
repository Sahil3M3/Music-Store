import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginTop: "50px", textAlign: "center" }}>
      <Row className="justify-content-center mb-4">
        <Col xs={12}>
          <h2 style={{ fontFamily: "fantasy", fontWeight: "bold" }}>About</h2>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs={12} md={4} className="mb-4">
          <Image
              src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          roundedCircle
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              border: "3px solid black",
            }}
          />
        </Col>
        
        <Col xs={12} md={8}>
          <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of 
            sorrows, hates no prosecutors will unfold in the enduring of which 
            were born in it? Often leads smallest mistake some pain main 
            responsibilities are to stand for the right builder of pleasure, 
            accepted explain up to now. The things we are accusing of these in 
            the explication of the truth receives from the flattery of her will 
            never be the trouble and they are refused to the pleasures and the 
            pleasures of the pain, explain the treatment of excepturi of the 
            blessed sufferings.I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, than they, this
          </p>
        </Col>
      </Row>
<Row>
<Col>
<p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.6" }}></p>
 this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any.
<p/>
</Col>
</Row>
    
    </Container>
  );
};

export default About;
