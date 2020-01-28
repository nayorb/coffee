export const SELECT_COFFEE = 'SELECT_COFFEE'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const INIT_APP = 'INIT_APP'
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT'
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH'

export const initAppAction = () => ({ type: INIT_APP })

export const selectCoffeeAction = coffeeName => ({
  type: SELECT_COFFEE,
  payload: coffeeName,
})

export const toggleMenuAction = () => ({ type: TOGGLE_MENU })

export const toggleSearchAction = () => ({ type: TOGGLE_SEARCH })

export const changeSearchTextAction = text => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text,
})
