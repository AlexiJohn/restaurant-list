import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const restaurantSlice = createSlice({
    
    name: 'restaurant',
    
    initialState: {
        restaurants:[{"restaurant_name":"Green Leaf 1","state":"Georgia"},{"restaurant_name":"Green Leaf 2","state":"Pennsylvania"},{"restaurant_name":"Green Leaf 3","state":"Pennsylvania"},{"restaurant_name":"Green Leaf 4","state":"Illinois"},{"restaurant_name":"Green Leaf 5","state":"California"},{"restaurant_name":"Green Leaf 6","state":"Texas"},{"restaurant_name":"Green Leaf 7","state":"Florida"},{"restaurant_name":"Green Leaf 8","state":"New York"},{"restaurant_name":"Green Leaf 9","state":"Pennsylvania"},{"restaurant_name":"Green Leaf 10","state":"Illinois"},{"restaurant_name":"Mountain View 1","state":"California"},{"restaurant_name":"Mountain View 2","state":"Texas"},{"restaurant_name":"Mountain View 3","state":"Florida"},{"restaurant_name":"Mountain View 4","state":"New York"},{"restaurant_name":"Mountain View 5","state":"Pennsylvania"},{"restaurant_name":"Mountain View 6","state":"Illinois"},{"restaurant_name":"Mountain View 7","state":"Georgia"},{"restaurant_name":"Mountain View 8","state":"Texas"},{"restaurant_name":"Mountain View 9","state":"Florida"},{"restaurant_name":"Mountain View 10","state":"New York"},{"restaurant_name":"Sunny Side 1","state":"Pennsylvania"},{"restaurant_name":"Sunny Side 2","state":"Illinois"},{"restaurant_name":"Sunny Side 3","state":"Georgia"},{"restaurant_name":"Sunny Side 4","state":"Texas"},{"restaurant_name":"Sunny Side 5","state":"Florida"},{"restaurant_name":"Sunny Side 6","state":"New York"},{"restaurant_name":"Sunny Side 7","state":"Pennsylvania"},{"restaurant_name":"Sunny Side 8","state":"Illinois"},{"restaurant_name":"Sunny Side 9","state":"California"},{"restaurant_name":"Sunny Side 10","state":"Texas"},{"restaurant_name":"Ocean's Delight 1","state":"Florida"},{"restaurant_name":"Ocean's Delight 2","state":"New York"},{"restaurant_name":"Ocean's Delight 3","state":"Pennsylvania"},{"restaurant_name":"Ocean's Delight 4","state":"Illinois"},{"restaurant_name":"Ocean's Delight 5","state":"Georgia"},{"restaurant_name":"Ocean's Delight 6","state":"Texas"},{"restaurant_name":"Ocean's Delight 7","state":"Florida"},{"restaurant_name":"Ocean's Delight 8","state":"New York"},{"restaurant_name":"Ocean's Delight 9","state":"Pennsylvania"},{"restaurant_name":"Ocean's Delight 10","state":"Illinois"},{"restaurant_name":"City Lights 1","state":"Georgia"},{"restaurant_name":"City Lights 2","state":"California"},{"restaurant_name":"City Lights 3","state":"Texas"},{"restaurant_name":"City Lights 4","state":"Florida"},{"restaurant_name":"City Lights 5","state":"New York"},{"restaurant_name":"City Lights 6","state":"Pennsylvania"},{"restaurant_name":"City Lights 7","state":"Illinois"},{"restaurant_name":"City Lights 8","state":"Georgia"},{"restaurant_name":"City Lights 9","state":"Texas"},{"restaurant_name":"City Lights 10","state":"Florida"},{"restaurant_name":"Golden Plate 1","state":"New York"},{"restaurant_name":"Golden Plate 2","state":"Pennsylvania"},{"restaurant_name":"Golden Plate 3","state":"Illinois"},{"restaurant_name":"Golden Plate 4","state":"Georgia"},{"restaurant_name":"Golden Plate 5","state":"California"},{"restaurant_name":"Golden Plate 6","state":"Texas"},{"restaurant_name":"Golden Plate 7","state":"Florida"},{"restaurant_name":"Golden Plate 8","state":"New York"},{"restaurant_name":"Golden Plate 9","state":"Pennsylvania"},{"restaurant_name":"Golden Plate 10","state":"Illinois"},{"restaurant_name":"The Friendly Chef 1","state":"Georgia"},{"restaurant_name":"The Friendly Chef 2","state":"California"},{"restaurant_name":"The Friendly Chef 3","state":"Texas"},{"restaurant_name":"The Friendly Chef 4","state":"Florida"},{"restaurant_name":"The Friendly Chef 5","state":"New York"},{"restaurant_name":"The Friendly Chef 6","state":"Pennsylvania"},{"restaurant_name":"The Friendly Chef 7","state":"Illinois"},{"restaurant_name":"The Friendly Chef 8","state":"Georgia"},{"restaurant_name":"The Friendly Chef 9","state":"Texas"},{"restaurant_name":"The Friendly Chef 10","state":"Florida"},{"restaurant_name":"Harbor Point 1","state":"New York"},{"restaurant_name":"Harbor Point 2","state":"Pennsylvania"},{"restaurant_name":"Harbor Point 3","state":"Illinois"},{"restaurant_name":"Harbor Point 4","state":"Georgia"},{"restaurant_name":"Harbor Point 5","state":"California"},{"restaurant_name":"Harbor Point 6","state":"Texas"},{"restaurant_name":"Harbor Point 7","state":"Florida"},{"restaurant_name":"Harbor Point 8","state":"New York"},{"restaurant_name":"Harbor Point 9","state":"Pennsylvania"},{"restaurant_name":"Harbor Point 10","state":"Illinois"},{"restaurant_name":"The Cozy Corner 1","state":"Georgia"},{"restaurant_name":"The Cozy Corner 2","state":"California"},{"restaurant_name":"The Cozy Corner 3","state":"Texas"},{"restaurant_name":"The Cozy Corner 4","state":"Florida"},{"restaurant_name":"The Cozy Corner 5","state":"New York"},{"restaurant_name":"The Cozy Corner 6","state":"Pennsylvania"},{"restaurant_name":"The Cozy Corner 7","state":"Illinois"},{"restaurant_name":"The Cozy Corner 8","state":"Georgia"},{"restaurant_name":"The Cozy Corner 9","state":"Texas"},{"restaurant_name":"The Cozy Corner 10","state":"Florida"}],
        selectedRestaurantState: "",
        filteredRestaurants: [],
        searchedRestaurants: []
    },
    
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload
            state.filteredRestaurants = []
        },
        setSelectedRestaurantState: (state,action) => {
            state.selectedRestaurantState = action.payload
        },
        setFilteredRestaurants: (state,action) => {
            state.filteredRestaurants = action.payload
        },
        filterRestaurants: (state,action) => {
            const searchTerm = action.payload.toLowerCase();

            // for SHOW ALL
            state.searchedRestaurants = state.restaurants.filter((restaurant) => 
            restaurant.restaurant_name.toLowerCase().includes(searchTerm) ||
            restaurant.state.toLowerCase().includes(searchTerm)
            );

            // for Filtered
            state.filteredRestaurants = state.restaurants.filter(restaurant => restaurant.state === state.selectedRestaurantState)
            state.filteredRestaurants = state.filteredRestaurants.filter((restaurant) => 
            restaurant.restaurant_name.toLowerCase().includes(searchTerm) ||
            restaurant.state.toLowerCase().includes(searchTerm)
            );
        }
    },

})

export const {
    setRestaurants,
    setSelectedRestaurantState,
    setFilteredRestaurants,
    filterRestaurants
} = restaurantSlice.actions;

export default restaurantSlice.reducer;