import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-c8156.firebaseio.com/',
});

export default instance;
