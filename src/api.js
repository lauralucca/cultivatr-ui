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
    return response
  }
}

export default HelloApi
