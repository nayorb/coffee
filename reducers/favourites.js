import { SET_FAVOURITES } from '../actions/favourites'

const initialState = []

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_FAVOURITES:
			return [...payload]
		default:
			return state
	}
}
