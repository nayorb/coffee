import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Provider, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'

import store from './store'
import { initAppAction } from './actions/app'
import TypesPage from './app/types/TypesPage'
import FavouritesPage from './app/types/FavouritesPage'
import LeftMenu from './app/menu/LeftMenu'
import COLORS from './constants/colors'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

const { width, height } = Dimensions.get('window')

const MainNavigator = createSwitchNavigator(
	{
		Home: { screen: TypesPage },
		Favourites: { screen: FavouritesPage },
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				display: 'none',
			},
		},
	}
)

const ScreenNavigator = createAppContainer(MainNavigator)

const Container = () => {
	const dispatch = useDispatch()
	dispatch(initAppAction())
	return (
		<View style={styles.container}>
			<ScreenNavigator />
		</View>
	)
}

const App = () => {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: COLORS.mainDark,
		overflow: 'hidden',
		width,
	},
})
