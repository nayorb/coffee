import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Provider, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'

import store from './store'
import { initAppAction } from './actions/app'
import TypesPage from './app/types/TypesPage'
import LeftMenu from './app/menu/LeftMenu'
import COLORS from './constants/colors'

const { width, height } = Dimensions.get('window')

const Container = () => {
	const dispatch = useDispatch()
	dispatch(initAppAction())
	return (
		<View style={styles.container}>
			<LeftMenu />
			<TypesPage />
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
	},
})
