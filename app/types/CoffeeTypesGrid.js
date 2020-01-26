import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'

import { selectCoffeeAction } from '../../actions/app'
import Tile from '../../components/Tile'
import CoffeeDetail from './CoffeeDetail'

const { width, height } = Dimensions.get('window')

const mod = a => {
	return (a * 2 - 2 * (a % 4)) / 2 + 4
}

const CoffeeTypesGrid = ({ selectedCoffee, selectNewCoffee, coffees }) => {
	const favourites = useSelector(state => state.favourites)
	const index = coffees.findIndex(c => c.title === selectedCoffee)
	const selectedCoffeeObject = coffees.find(c => c.title === selectedCoffee)

	const isInFavourites = c => favourites.includes(c.title)

	let layoutArray = coffees.map((coffee, i) => (
		<Tile
			key={coffee.title}
			title={coffee.title}
			icon={coffee.icon}
			isFavourite={isInFavourites(coffee)}
			isSelected={coffee.title === selectedCoffee}
			onClick={() => selectNewCoffee(coffee.title)}
		/>
	))

	if (selectedCoffee !== '') {
		layoutArray.splice(
			mod(index),
			0,
			<CoffeeDetail coffee={selectedCoffeeObject} isSelected={true} />
		)
	}

	return <View style={styles.container}>{layoutArray}</View>
}

export default CoffeeTypesGrid

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})
