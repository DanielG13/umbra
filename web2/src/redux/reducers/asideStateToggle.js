import { type as asideStateToggle } from "../actions/asideStateToggle";
import each from "lodash/each";

const defaultState = {

  /* Aside Menu */
  isAsideExpanded: false,
};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {

    case asideStateToggle: {
      const htmlAsideClassName = "has-aside-expanded";

      let isExpand;

      if (payload !== null) {
        isExpand = payload;
      } else {
        isExpand = !state.isAsideExpanded;
      }

      if (isExpand) {
        document.documentElement.classList.add(htmlAsideClassName);
      } else {
        document.documentElement.classList.remove(htmlAsideClassName);
      }

      state.isAsideExpanded = isExpand;
    }

    default:
      return state;
  }
}

export default reducer;