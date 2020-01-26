import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { connect, useSelector, useDispatch } from 'react-redux'

import { toggleMenuAction, selectCoffeeAction } from '../../actions/app'
import Header from '../../components/Header'
import CoffeeTypesGrid from './CoffeeTypesGrid'
import LeftMenu from '../menu/LeftMenu'

const FavouritesPage = ({ navigation }) => {
	const selectedCoffee = useSelector(state => state.app.selectedCoffee)
	const dispatch = useDispatch()

	const coffees = useSelector(state => state.coffee)
	const storeFavourites = useSelector(state => state.favourites)

	const favourites = coffees.filter(c => storeFavourites.includes(c.title))

	const setSelectedCoffee = coffee => dispatch(selectCoffeeAction(coffee))

	return (
		<View style={styles.container}>
			<LeftMenu navigation={navigation} focus={navigation.state.key} />
			<Header
				menuClicked={() => dispatch(toggleMenuAction())}
				title='Favourites'
			/>
			<ScrollView>
				<CoffeeTypesGrid
					coffees={favourites}
					selectedCoffee={selectedCoffee}
					selectNewCoffee={c => setSelectedCoffee(c)}
				/>
			</ScrollView>
		</View>
	)
}

export default FavouritesPage

const styles = StyleSheet.create({
	container: {},
})
