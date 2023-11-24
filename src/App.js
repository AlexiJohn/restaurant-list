import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { setRestaurants } from './reducers/restaurantSlice';
import RestaurantDropdown from './components/RestaurantDropdown';
import RestaurantList from './components/RestaurantList';

function App() {

  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurant);


  useEffect(() => {

    // Does the API call so that it's an easier call for components
    dispatch(setRestaurants());
    console.log(restaurants);

  }, []);

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Restaurants</Card.Title>
              <Card.Text>Select a state and see which restaurants are available.</Card.Text>
              <RestaurantDropdown/>
              <RestaurantList/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
