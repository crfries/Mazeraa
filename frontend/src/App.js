import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Screens
import AboutScreen from './screens/AboutScreen';
import CartScreen from './screens/CartScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/UserLoginScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-1'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/about' component={AboutScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
