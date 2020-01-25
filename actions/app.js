export const SELECT_COFFEE = 'SELECT_COFFEE'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const INIT_APP = 'INIT_APP'

export const initAppAction = () => ({ type: INIT_APP })

export const selectCoffeeAction = coffeeName => ({
	type: SELECT_COFFEE,
	payload: coffeeName,
})

export const toggleMenuAction = () => ({ type: TOGGLE_MENU })
