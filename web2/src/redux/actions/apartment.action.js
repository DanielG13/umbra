import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

const API_URL = "http://localhost:3001/api/apartment/";


export function create (data) {
  return dispatch => {
    return axios.post(API_URL + "create", {
      name: data.name,
      type: data.type,
      built_area: data.built_area,
      balcony_area: data.balcony_area,
      balcony_construction_area: data.balcony_construction_area,
      private_area: data.private_area,
      level: data.level,
      build: data.build,
    });
  }
}

export function list (data) {
  return dispatch => {
    return axios.get(API_URL);
  }
}

export function gestion (id, state) {
  return dispatch => {
    return axios.post(API_URL + "gestion", {
      id: id,
      state: state,
    });
  }
}

export function deleted (id) {
  return dispatch => {
    return axios.post(API_URL + "delete", {
      id: id
    });
  }
}

export function countt () {
  return dispatch => {
    return axios.get(API_URL + "count");
  }
}
