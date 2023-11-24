import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../reducers/restaurantSlice';

const store = configureStore({
    reducer: {
        restaurant: restaurantReducer
    }
});

export default store;