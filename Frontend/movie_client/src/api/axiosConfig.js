import axios from 'axios';

//You can't really fetch data from servers, with a different hostname, that don't have a CORS policy to allow request from your domain.
export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
});