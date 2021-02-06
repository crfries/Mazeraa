import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card
      className='my-2 rounded pb-2 pt-2 overflow-hidden align-items-center'
      style={{
        boxShadow: "0 8px 6px -6px #a8a6a6",
        border: "none",
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{ height: "250px", width: "auto" }}
        />
      </Link>

      <Card.Body className='pl-5'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h4' className='pt-2'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
