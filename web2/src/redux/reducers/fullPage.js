import { type as fullPage } from "../actions/fullPage";
import each from "lodash/each";

const defaultState = {
  /* NavBar */
  isNavBarVisible: true,

  /* Aside Menu */
  isAsideVisible: true,
  isAsideMobileExpanded: false,
};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case fullPage: {
      state.isNavBarVisible = !payload;
      state.isAsideVisible = !payload;
      state.isFooterBarVisible = !payload;

      each(["has-aside-left", "has-navbar-fixed-top"], (htmlClass) => {
        if (payload) {
          document.documentElement.classList.remove(htmlClass);
        } else {
          document.documentElement.classList.add(htmlClass);
        }
      });

      each(["has-background-primary"], (bodyClass) => {
        if (payload) {
          console.log("entra");
          document.documentElement.classList.add(bodyClass);
        } else {
          document.documentElement.classList.remove(bodyClass);
        }
      });
    }

    default:
      return state;
  }
}

export default reducer;
