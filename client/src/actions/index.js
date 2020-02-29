import axios from 'axios';
import { FETCH_USER, FETCH_HOUSE } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const fetchHouse = () => async dispatch => {
    const res = await axios.get('/api/dashboard');
    
    dispatch({ type: FETCH_HOUSE, payload: res.data })
};

export const createHouse = (values, history) => async dispatch => {
    const res = await axios.post('/api/dashboard', values);
    history.push('/dashboard')
    dispatch({ type: FETCH_USER, payload: res.data })

    // dispatch({ type: CREATE_HOUSE, payload: res.data })
}

