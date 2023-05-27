import axios from 'axios';

const Axios = axios.create({
  baseUrl: 'http://localhost:8080',
  withCredentials: true,
});

export default Axios;
