import { create } from 'apisauce';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = 'https://desolate-mountain-25599.herokuapp.com';
}

const api = create({
  baseURL,
});

export default api;
