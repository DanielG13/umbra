import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';
import { SET_DATA_USER } from './types';
import { SET_MENU_ROL } from './types';

const API_URL = "http://localhost:3001/api/auth/";


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

//export function setDataUser(user) {
  //return {
  //  type: SET_DATA_USER,
  //  user_data
  //};
//}

export function setMenuRol(menu) {
  return {
    type: SET_MENU_ROL,
    menu
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('menu');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login (data) {
  return dispatch => {
    return axios.post(API_URL + "signin", {
      username: data.username,
      password: data.password
    })
    .then(res => {
      const token = res.data.accessToken;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
      //dispatch(setDataUser(token));
      dispatch(setMenuRol(JSON.stringify(res.data.menus)));
      localStorage.setItem('menu', JSON.stringify(res.data.menus));
      localStorage.setItem('user', JSON.stringify(res.data.name + ' ' + res.data.lastname));

    });
  }
}
