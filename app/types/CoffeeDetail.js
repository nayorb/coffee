import React, { useState, useEffect, useRef } from 'react'
import {
	Text,
	ImageBackground,
	View,
	StyleSheet,
	Animated,
	LayoutChangeEvent,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'

import COLORS from '../../constants/colors'
import ClickableIcon from '../../components/ClickableIcon'
import { toggleFavouriteAction } from '../../actions/favourites'

const { width, height } = Dimensions.get('window')

const FAVOURITE_ICON_SIZE = 48

const CoffeeDetail = ({ coffee, isSelected }) => {
	const [heightAnim] = useState(new Animated.Value(0))
	const dispatch = useDispatch()
	const ref = element => {}

	const isInFavourites =
		useSelector(state => state.favourites.findIndex(f => f === coffee.title)) >
		-1

	useEffect(() => {
		Animated.timing(heightAnim, {
			toValue: isSelected ? 1 : 0,
			duration: 250,
		}).start()
	}, [isSelected])

	const heightValue = heightAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 700],
	})

	return (
		<Animated.View style={{ ...styles.container, height: heightValue }}>
			<View ref={ref}>
				<View style={styles.detailHeader}>
					<ClickableIcon
						style={styles.favouriteIcon}
						color={COLORS.creamLight}
						size={FAVOURITE_ICON_SIZE}
						type={isInFavourites ? 'ios-filled' : 'ios'}
						icon='like'
						onClick={() => dispatch(toggleFavouriteAction(coffee))}
					/>
				</View>
				<ImageBackground source={coffee.detail} style={styles.image} />
				<View style={styles.detail}>
					<Text style={styles.detailText}>{coffee.detailText}</Text>
				</View>
			</View>
		</Animated.View>
	)
}

export default CoffeeDetail

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.mainDark,
		position: 'relative',
		overflow: 'hidden',
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
