import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className='footerContainer'>
        <Row>
          <Col className='text-center py-3 '>Copyright &copy; Mazeraa</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
