import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { connect, useSelector, useDispatch } from 'react-redux'

import { toggleMenuAction, selectCoffeeAction } from '../../actions/app'
import Header from '../../components/Header'
import CoffeeTypesGrid from './CoffeeTypesGrid'
import CoffeeDetail from './CoffeeDetail'
import LeftMenu from '../menu/LeftMenu'

const TypesPage = ({ navigation }) => {
	const selectedCoffee = useSelector(state => state.app.selectedCoffee)
	const isMenuOpened = useSelector(state => state.app.isMenuOpened)

	const coffees = useSelector(state => state.coffee)

	const dispatch = useDispatch()

	const setSelectedCoffee = coffee => dispatch(selectCoffeeAction(coffee))

	return (
		<View style={styles.container}>
			<LeftMenu navigation={navigation} focus={navigation.state.key} />
			<Header
				menuClicked={() => dispatch(toggleMenuAction())}
				isMenuOpened={isMenuOpened}
				title='Coffee types'
			/>
			<ScrollView>
				<CoffeeTypesGrid
					coffees={coffees}
					selectedCoffee={selectedCoffee}
					selectNewCoffee={c => setSelectedCoffee(c)}
				/>
			</ScrollView>
		</View>
	)
}

export default TypesPage

const styles = StyleSheet.create({
	container: {},
})
