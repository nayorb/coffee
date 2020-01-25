import { AsyncStorage } from 'react-native'

const APP_KEY = '@COFFEE-APP:'
export const FAVOURITES_KEY = APP_KEY + 'FAVOURITES_KEY'

const _storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value))
	} catch (error) {
		console.error(error)
	}
}

const _retrieveData = async key => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return JSON.parse(value)
		}
		return []
	} catch (error) {
		console.error(error)
	}
}

export const getFavourites = () => _retrieveData(FAVOURITES_KEY)
export const setFavourites = value => _storeData(FAVOURITES_KEY, value)
