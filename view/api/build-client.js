import axios from 'axios';

const buildClient = ({ req }) => {
  if(typeof window === 'undefined') {
    return axios.create({
      baseURL: '/',
      headers: req.headers,
      withCredentials: true, 
      credentials: 'include'
    });
  } else {
    return axios.create({
      baseURL: '/',
      withCredentials: true, 
      credentials: 'include'
    })
  }
}

export default buildClient;