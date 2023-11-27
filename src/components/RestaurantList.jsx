import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';
import { setFilteredRestaurants } from '../reducers/restaurantSlice';
import RestaurantTable from './RestaurantTableAll';

function RestaurantList() {
    const { filteredRestaurants, selectedRestaurantState } = useSelector((state) => state.restaurant);
    const all = "All States";
    
    const sortedRestaurants = [...filteredRestaurants]
        .sort((a,b) => {
            return a.restaurant_name.localeCompare(b.restaurant_name);
        });
    return(
        <>
        
        {selectedRestaurantState === all ? (
            <>
                <RestaurantTable/>
            </>
        ) : (
            <>
            {sortedRestaurants.map(restaurant => (
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