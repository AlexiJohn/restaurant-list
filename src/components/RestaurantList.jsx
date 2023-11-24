import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';
import { setFilteredRestaurants } from '../reducers/restaurantSlice';
import RestaurantTable from './RestaurantTableAll';

function RestaurantList() {
    const { filteredRestaurants, selectedRestaurantState } = useSelector((state) => state.restaurant);
    const all = "All States";
    return(
        <>
        
        {selectedRestaurantState === all ? (
            <>
                <RestaurantTable/>
            </>
        ) : (
            <>
            {filteredRestaurants.map(restaurant => (
                <Card key={restaurant.restaurant_name} className="bg-light mb-3">
                    <Card.Body>
                    <Card.Title>{restaurant.restaurant_name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
            </>
        )}
        </>       
    )
    
}

export default RestaurantList;