import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import GalleryCarousel from '../components/GalleryCarousel';
import Meta from '../components/Meta';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Meta title='Mazeraa | Shop' />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'}>{error}</Message>
      ) : (
        <>
          <Paginate pages={pages} page={page} />
          <Row className='pt-5'>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Container>
            <GalleryCarousel />
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
