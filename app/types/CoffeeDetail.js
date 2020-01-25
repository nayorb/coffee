import React from 'react'
import {
	Text,
	ImageBackground,
	View,
	StyleSheet,
	ScrollView,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'

import COLORS from '../../constants/colors'
import ClickableIcon from '../../components/ClickableIcon'
import { toggleFavouriteAction } from '../../actions/favourites'

const { width, height } = Dimensions.get('window')

const FAVOURITE_ICON_SIZE = 48

const CoffeeDetail = ({ selectedCoffeeName }) => {
	const dispatch = useDispatch()
	const selectedCoffee =
		useSelector(state =>
			state.coffee.find(c => c.title === selectedCoffeeName)
		) || {}
	const isInFavourites =
		useSelector(state =>
			state.favourites.findIndex(f => f === selectedCoffeeName)
		) > -1

	return (
		<ScrollView style={styles.container}>
			<View style={styles.detailHeader}>
				<ClickableIcon
					style={styles.favouriteIcon}
					color={COLORS.creamLight}
					size={FAVOURITE_ICON_SIZE}
					type={isInFavourites ? 'ios-filled' : 'ios'}
					icon='like'
					onClick={() => dispatch(toggleFavouriteAction(selectedCoffee))}
				/>
			</View>
			<ImageBackground source={selectedCoffee.detail} style={styles.image} />
			<View style={styles.detail}>
				<Text style={styles.detailText}>{selectedCoffee.detailText}</Text>
			</View>
		</ScrollView>
	)
}

export default CoffeeDetail

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.mainDark,
		position: 'relative',
	},
	image: {
		width: width,
		height: (width / 880) * 650,
	},
	detail: {
		paddingHorizontal: 25,
		paddingTop: 20,
		paddingBottom: 50,
	},
	detailText: {
		color: COLORS.creamLight,
		fontSize: 18,
	},
	favouriteIcon: {},
	detailHeader: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingTop: 10,
		paddingRight: 15,
		backgroundColor: COLORS.main,
	},
})
