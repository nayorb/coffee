import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import coffeeReducer from './reducers/coffee'
import appReducer from './reducers/app'
import favouritesReducer from './reducers/favourites'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
	combineReducers({
		coffee: coffeeReducer,
		app: appReducer,
		favourites: favouritesReducer,
	}),
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
