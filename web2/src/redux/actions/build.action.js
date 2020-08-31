import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

const API_URL = "http://localhost:3001/api/build/";


export function create (data) {
  return dispatch => {
    return axios.post(API_URL + "create", {
      description: data.description,
    });
  }
}

export function list (data) {
  return dispatch => {
    return axios.get(API_URL);
  }
}
