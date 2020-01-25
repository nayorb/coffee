import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { selectCoffeeAction } from '../../actions/app'
import Tile from '../../components/Tile'

const CoffeeTypesGrid = ({ selectedCoffee, selectNewCoffee }) => {
	const coffees = useSelector(state => state.coffee)
	const favourites = useSelector(state => state.favourites)

	const isInFavourites = c => favourites.includes(c.title)

	return (
		<View style={styles.container}>
			{coffees.map(coffee => (
				<Tile
					key={coffee.title}
					title={coffee.title}
					icon={coffee.icon}
					isFavourite={isInFavourites(coffee)}
					isSelected={coffee.title === selectedCoffee}
					onClick={() => selectNewCoffee(coffee.title)}
				/>
			))}
		</View>
	)
}

export default CoffeeTypesGrid

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})
