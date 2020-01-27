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

const CoffeeTypesGrid = ({ selectNewCoffee, coffees }) => {
	const favourites = useSelector(state => state.favourites)
	const selectedCoffeeName = useSelector(state => state.app.selectedCoffee)
	const index = coffees.findIndex(c => c.title === selectedCoffeeName)
	const selectedCoffee = coffees.find(c => c.title === selectedCoffeeName)

	const isInFavourites = c => favourites.includes(c.title)

	let layoutArray = coffees.map((coffee, i) => (
		<>
			<Tile
				key={coffee.title}
				title={coffee.title}
				icon={coffee.icon}
				isFavourite={isInFavourites(coffee)}
				isSelected={coffee.title === selectedCoffeeName}
				onClick={() => selectNewCoffee(coffee.title)}
			/>
			{(i + 1) % 4 === 0 && i !== 0 ? (
				<>
					{coffees.map((coffee, idx) =>
						idx <= i && idx > i - 4 ? (
							<CoffeeDetail
								coffee={coffee}
								isSelected={coffee === selectedCoffee}
							/>
						) : (
							<></>
						)
					)}
				</>
			) : null}
		</>
	))

	if (coffees.length % 4 !== 0) {
		const diff = coffees.length - (coffees.length % 4)
		layoutArray = layoutArray.concat(
			coffees.map((coffee, idx) =>
				idx >= diff ? (
					<CoffeeDetail
						coffee={coffee}
						isSelected={coffee === selectedCoffee}
					/>
				) : (
					<></>
				)
			)
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
