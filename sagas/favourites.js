import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getFavourites, setFavourites } from '../utils/localStorage'
import { setFavouritesAction, TOGGLE_FAVOURITE } from '../actions/favourites'
import { selectCoffeeAction } from '../actions/app'
import { INIT_APP } from '../actions/app'

function* toggleFavouriteSaga({ payload }) {
	try {
		const oldFavourites = yield select(state => state.favourites)
		const selectedCoffee = yield select(state => state.app.selectedCoffee)
		const fav = oldFavourites.find(f => f === payload.title)
		let favourites
		if (fav) {
			favourites = oldFavourites.filter(f => f !== fav)
		} else {
			favourites = [...oldFavourites, payload.title]
		}
		if (fav === selectedCoffee) {
			yield put(selectCoffeeAction(''))
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
