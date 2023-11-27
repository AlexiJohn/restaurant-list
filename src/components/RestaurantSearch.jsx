import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputGroup } from 'react-bootstrap';

import { filterRestaurants } from '../reducers/restaurantSlice';

const SearchComponent = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(filterRestaurants(event.target.value));
    };

    return (
        <InputGroup className='mb-3'>
            <FormControl
                placeholder='Search restaurants or states...'
                aria-label='Search restaurants or states'
                onChange={handleSearch}
                />
        </InputGroup>
    );
};

export default SearchComponent;