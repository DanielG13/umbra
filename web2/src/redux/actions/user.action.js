import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

const API_URL = "http://localhost:3001/api/user/";


export function create (data) {
  return dispatch => {
    return axios.post(API_URL + "create", {
      name: data.name,
      lastname: data.lastname,
      identificacion: data.identificacion,
      phonenumber: data.phonenumber,
      role: data.role,
      username: data.username,
      email: data.email,
      password: data.password,
    });
  }
}

export function list (data) {
  return dispatch => {
    return axios.get(API_URL);
  }
}
