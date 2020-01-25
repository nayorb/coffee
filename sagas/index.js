import { all, fork } from 'redux-saga/effects'

import * as favouritesSagas from './favourites'

export default function*() {
	yield all([...Object.values(favouritesSagas).map(fork)])
}
