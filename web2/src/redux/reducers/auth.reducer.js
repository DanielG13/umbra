import { SET_CURRENT_USER , SET_MENU_ROL} from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  menu: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
      case SET_MENU_ROL:
        return {
          menu: action.menu
        };
    default: return state;
  }
}
