import React from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'

import COLORS from '../constants/colors'

const MenuTile = ({ size, onClick, icon }) => {
	return (
		<TouchableOpacity
			style={{ ...styles.container, width: size, height: size }}
			onPress={onClick}
		>
			{icon}
		</TouchableOpacity>
	)
}

export default MenuTile

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.main,
		borderBottomColor: COLORS.creamLight,
		borderBottomWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 64,
		height: 64,
	},
})
