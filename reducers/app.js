import {
  SELECT_COFFEE,
  TOGGLE_MENU,
  CHANGE_SEARCH_TEXT,
  TOGGLE_SEARCH,
} from '../actions/app'

const initialState = {
  selectedCoffee: '',
  isMenuOpened: false,
  searchText: '',
  searchActive: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      }
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchActive: !state.searchActive,
        searchText: state.searchActive ? '' : state.searchText,
      }
    case SELECT_COFFEE:
      if (payload === state.selectedCoffee) {
        return {
          ...state,
          selectedCoffee: '',
        }
      }
      return {
        ...state,
        selectedCoffee: payload,
      }
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpened: !state.isMenuOpened,
      }
    default:
      return state
  }
}
