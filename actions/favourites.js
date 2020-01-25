export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'
export const GET_FAVOURITES_REQUESTED = 'GET_FAVOURITES_REQUESTED'
export const SET_FAVOURITES = 'SET_FAVOURITES'

export const toggleFavouriteAction = favourite => ({
	type: TOGGLE_FAVOURITE,
	payload: favourite,
})

export const setFavouritesAction = favourites => ({
	type: SET_FAVOURITES,
	payload: favourites,
})
