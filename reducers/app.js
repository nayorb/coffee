import { SELECT_COFFEE, TOGGLE_MENU } from '../actions/app'

const initialState = {
	selectedCoffee: 'Americano',
	isMenuOpened: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SELECT_COFFEE:
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
