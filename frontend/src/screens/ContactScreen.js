import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AwesomeButtonSocial } from "react-awesome-button";
import "../buttonStyle.css";
import ContactForm from "../components/ContactForm";
import Meta from "../components/Meta";

const ContactScreen = () => {
  //update these at urlgeni.us for new deep link
  const instaLink = "https://urlgeni.us/instagram/JdKY";
  const fbLink = "https://urlgeni.us/facebook/K1vB";

  return (
    <Container>
      <Meta title='Mazeraa | Contact' />
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          aligntItems: "center",
        }}
      >
        <Row>
          <Col
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AwesomeButtonSocial
              type='facebook'
              size='large'
              className='mt-5'
              style={{
                textDecoration: "none",
              }}
              href={fbLink}
              target='_blank'
            >
              Facebook
            </AwesomeButtonSocial>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          aligntItems: "center",
        }}
      >
        <Row>
          <Col
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AwesomeButtonSocial
              type='instagram'
              size='large'
              className='mt-5'
              style={{
                textDecoration: "none",
              }}
              href={instaLink}
              target='_blank'
            >
              Instagram
            </AwesomeButtonSocial>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactScreen;
