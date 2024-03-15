import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzZkMzRiNGViZWZiNGIwNDA1YzcwNzNjZWE4MmQyZiIsInN1YiI6IjY1ZWZjZjI2OTQ2MzE4MDE4NTYxMTIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j-HkwcAc4k_PvgFO0VJdBELrYyA7Xs9OQ1V-5lrXHfU',
  },
});

export default api;
