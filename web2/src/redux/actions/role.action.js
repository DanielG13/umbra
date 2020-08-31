import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

const API_URL = "http://localhost:3001/api/role/";


export function create (data) {
  return dispatch => {
    return axios.post(API_URL + "create", {
      name: data.name,
      nit: data.nit,
      description: data.description
    });
  }
}

export function list (data) {
  return dispatch => {
    return axios.get(API_URL);
  }
}
