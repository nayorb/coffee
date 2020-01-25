import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getFavourites, setFavourites } from '../utils/localStorage'
import { setFavouritesAction, TOGGLE_FAVOURITE } from '../actions/favourites'
import { INIT_APP } from '../actions/app'

function* toggleFavouriteSaga({ payload }) {
	try {
		const oldFavourites = yield select(state => state.favourites)
		const fav = oldFavourites.find(f => f === payload.title)
		let favourites
		if (fav) {
			favourites = oldFavourites.filter(f => f !== fav)
		} else {
			favourites = [...oldFavourites, payload.title]
		}
		yield setFavourites(favourites)
		yield put(setFavouritesAction(favourites))
	} catch (e) {
		console.error(e)
	}
}

export function* toggleFavouriteRequest() {
	yield takeEvery(TOGGLE_FAVOURITE, toggleFavouriteSaga)
}

function* initAppSaga() {
	try {
		const favourites = yield call(getFavourites)
		yield put(setFavouritesAction(favourites))
	} catch (e) {
		console.error(e)
	}
}

export function* initAppRequest() {
	yield takeEvery(INIT_APP, initAppSaga)
}
