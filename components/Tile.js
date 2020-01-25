import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

import COLORS from '../constants/colors'
import Icon from './Icon'

const Tile = ({ title, icon, isSelected, onClick, isFavourite }) => {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				isSelected ? { backgroundColor: COLORS.main } : null,
			]}
			onPress={() => {
				onClick(title)
			}}
		>
			<Image source={icon} style={styles.icon} />
			<Text style={[styles.title, isSelected ? { color: COLORS.white } : null]}>
				{title}
			</Text>
			{isFavourite ? (
				<Icon
					style={styles.favouriteIcon}
					color={COLORS.mainDark}
					size={14}
					type='ios-filled'
					icon='like'
				/>
			) : null}
		</TouchableOpacity>
	)
}

export default Tile

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.creamLight,
		justifyContent: 'center',
		alignItems: 'center',
		width: width / 4,
		height: width / 4,
		borderColor: COLORS.gray,
		borderWidth: 1,
		position: 'relative',
	},
	title: {
		color: COLORS.black,
	},
	icon: {
		height: 40,
		width: 40,
	},
	favouriteIcon: {
		position: 'absolute',
		top: -75,
		right: -45,
	},
})
