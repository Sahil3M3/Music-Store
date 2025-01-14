import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router";

const HomePage = () => {
  const tours = [
    { date: "JUL 16", location: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];

  return (
    <Container fluid>
   
      {/* Album Section */}
      <Row className="text-center py-5" style={{ backgroundColor: "rgb(119, 119, 119)" }}>
        <Col>
          <Button variant="info" size="lg" className="mb-4">
            Get our Latest Album
          </Button>
          <br />
          <Button
            variant="outline-info"
            size="lg"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            ▶
          </Button>
        </Col>
      </Row>

      {/* Tours Section */}
      <Row className="text-center mt-5">
        <Col>
          <h2>TOURS</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={10} md={8}>
          <Table >
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Venue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour, index) => (
                <tr key={index}>
                  <td>{tour.date}</td>
                  <td>{tour.location}</td>
                  <td>{tour.venue}</td>
                  <td>
                    <Button variant="info">Buy Tickets</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
