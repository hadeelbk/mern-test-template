import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const fetchBookings = () => API.get('/bookings');
export const createBooking = (data) => API.post('/bookings', data);