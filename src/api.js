import axios from 'axios'
import baseURL from './base'

const HelloApi = {
  get: async name => {
    const response = await axios.get(`${baseURL}/hello?name=${name}`);
    return response.data;
  }
}

export const User = {
  saveNew: async data => {
    const response = await axios.post(`${baseURL}/user`, data)
    console.log('CHAMOU', response, data)
    return response
  }
}

export default HelloApi

//// Optionally the request above could also be done as
//axios.get('/user', {
//    params: {
//      ID: 12345
//    }
//  })
//  .then(function (response) {
//    console.log(response);
//  })
//  .catch(function (error) {
//    console.log(error);
//  })
//  .then(function () {
//    // always executed
//  });