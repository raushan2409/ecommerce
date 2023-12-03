import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import { Button } from "react-bootstrap";
import TheGeneric from "./TheGeneric";
import { Card, ListGroup } from "react-bootstrap/esm";

export default function Home() {
  return (
    <>
      <TheGeneric />
      <Container>
        <h2 style={{ fontFamily: "cursive" }}>Tours</h2>

        <Card style={{ width: "67rem", margin: "auto", border: "1px solid" }}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Jul16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">BUY TICKETS</Button>{" "}
                </Col>
                {/* <hr />
          <br /> */}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Jul16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">BUY TICKETS</Button>{" "}
                </Col>
                {/* <hr />
          <br /> */}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Jul16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">BUY TICKETS</Button>{" "}
                </Col>
                {/* <hr />
          <br /> */}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Jul16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">BUY TICKETS</Button>{" "}
                </Col>
                {/* <hr />
          <br /> */}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Jul16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">BUY TICKETS</Button>{" "}
                </Col>
                {/* <hr />
          <br /> */}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Jul16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">BUY TICKETS</Button>{" "}
                </Col>
                {/* <hr />
          <br /> */}
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </>
  );
}
