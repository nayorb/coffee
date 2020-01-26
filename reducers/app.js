import { SELECT_COFFEE, TOGGLE_MENU } from '../actions/app'

const initialState = {
	selectedCoffee: '',
	isMenuOpened: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
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
