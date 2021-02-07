import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className='my-2 pb-2 pt-2 overflow-hidden align-items-center productCard'>
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
            <h5>
              <strong>{product.name}</strong>
            </h5>
          </Card.Title>
        </Link>

        <Card.Text as='h6'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
