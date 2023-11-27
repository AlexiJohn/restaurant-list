import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { setRestaurants } from './reducers/restaurantSlice';
import RestaurantDropdown from './components/RestaurantDropdown';
import RestaurantList from './components/RestaurantList';
import SearchComponent from './components/RestaurantSearch';

function App() {

  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurant);


  useEffect(() => {
    
    // created proxy server to bypass CORS
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restaurant-list-server.vercel.app/restaurants');
        dispatch(setRestaurants(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

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
              <SearchComponent/>
              <RestaurantList/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
