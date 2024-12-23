import axios from 'axios';

// const config = axios.create({
//   baseURL: 'https://api.example.com/v1',
//   headers: {
//     Authorization: 'Bearer API_TOKEN',
//   },
// });

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});
