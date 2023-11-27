import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { setSelectedRestaurantState, setFilteredRestaurants } from '../reducers/restaurantSlice';

function RestaurantDropdown() {
    
    const dispatch = useDispatch();
    const { restaurants, selectedRestaurantState, filteredRestaurants } = useSelector((state) => state.restaurant);

    const uniqueStates = [...new Set(restaurants.map(item => item.state))];
    const stateList = uniqueStates.map(state => ({ state }));
    const options = stateList.sort((a,b) => {
      return a.state.localeCompare(b.state);
    });
    

    const handleSelect = (state) => {
        const value = state;
        dispatch(setSelectedRestaurantState(value));
        filterRestaurantByState(restaurants,value);
        
    };
    
    const filterRestaurantByState = (restaurants, targetState) => {
        dispatch(setFilteredRestaurants(restaurants.filter(restaurant => restaurant.state === targetState)));
    }
    
    return (
    <div className="dropdown">

    <Dropdown className='mb-3'>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {selectedRestaurantState === "" ? (<>Select a State</>) : (<>{selectedRestaurantState}</>)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect('All States')}>Show All</Dropdown.Item>
        {options.sort().map((option) => (
          <Dropdown.Item key={option.state} onClick={() => handleSelect(option.state)}>
            {option.state}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    );
    
};
    
export default RestaurantDropdown;