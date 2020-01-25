import React, { useState } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'

import COLORS from '../constants/colors'
import Icon from './Icon'
import ClickableIcon from './ClickableIcon'

const ICON_SIZE = 24

const Header = ({ menuClicked, isMenuOpened }) => {
	return (
		<View style={styles.container}>
			<ClickableIcon
				size={ICON_SIZE}
				color={COLORS.creamLight}
				icon='menu'
				onClick={menuClicked}
			/>
			<Text style={styles.title}>ALL TYPES</Text>
			<ClickableIcon
				size={ICON_SIZE}
				color={COLORS.creamLight}
				icon='search--v1'
			/>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 5,
		textTransform: 'uppercase',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray,
	},
	title: {
		color: COLORS.main,
		fontSize: 24,
	},
})
