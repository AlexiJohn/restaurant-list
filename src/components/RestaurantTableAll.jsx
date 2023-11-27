import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

function RestaurantTable() {
    const { searchedRestaurants, restaurants } = useSelector((state) => state.restaurant);

    const restaurantsByState = {};

    if (searchedRestaurants == []){
        restaurants.forEach(({ state, restaurant_name }) => {
    if (!restaurantsByState[state]) {
      restaurantsByState[state] = [];
    }
    restaurantsByState[state].push(restaurant_name);
    restaurantsByState[state].sort();
  });
    } else if {
    
    searchedRestaurants.forEach(({ state, restaurant_name }) => {
    if (!restaurantsByState[state]) {
      restaurantsByState[state] = [];
    }
    restaurantsByState[state].push(restaurant_name);
    restaurantsByState[state].sort();
  });
    }
  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th className="text-left">State</th>
            <th className="text-left">Restaurants</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(restaurantsByState).map(([state, restaurants]) => (
            <tr key={state}>
              <td className="text-left">{state}</td>
              <td className="text-left">
                <ul>
                  {restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantTable;
