import React from "react";
import { Carousel, Container } from "react-bootstrap";

//gallery pic import
import g0 from "../images/gallerypics/0.jpg";
import g1 from "../images/gallerypics/1.jpg";
import g2 from "../images/gallerypics/2.jpg";
import g3 from "../images/gallerypics/3.jpg";
// import g4 from "../images/gallerypics/4.jpg";
import g5 from "../images/gallerypics/5.jpg";
// import g6 from "../images/gallerypics/6.jpg";
import g7 from "../images/gallerypics/7.jpg";
import g8 from "../images/gallerypics/8.jpg";
import g9 from "../images/gallerypics/9.jpg";
import g10 from "../images/gallerypics/10.jpg";
import g11 from "../images/gallerypics/11.jpg";
import g12 from "../images/gallerypics/12.jpg";
import g13 from "../images/gallerypics/13.jpg";
import g14 from "../images/gallerypics/14.jpg";

const GalleryCarousel = () => {
  return (
    <>
      <Container
        className='pt-5'
        style={{
          width: "100%",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <Container style={{ maxWidth: "100%", maxHeight: "500px" }}>
          <Carousel fade='true' indicators='false'>
            <Carousel.Item>
              <img className='d-block w-100' src={g5} alt='6 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g0} alt='1 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g1} alt='2 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g2} alt='3 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g3} alt='4 slide' />
            </Carousel.Item>
            {/* <Carousel.Item>
              <img className='d-block w-100' src={g4} alt='5 slide' />
            </Carousel.Item> */}
            {/* <Carousel.Item>
              <img className='d-block w-100' src={g6} alt='7 slide' />
            </Carousel.Item> */}
            <Carousel.Item>
              <img className='d-block w-100' src={g7} alt='8 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g8} alt='9 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g9} alt='10 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g10} alt='11 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g11} alt='12 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g12} alt='13 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g13} alt='14 slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={g14} alt='Third slide' />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </>
  );
};

export default GalleryCarousel;
