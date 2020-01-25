import React, { useState } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'

import COLORS from '../../constants/colors'
import { toggleMenuAction } from '../../actions/app'
import MenuTile from '../../components/MenuTile'
import Icon from '../../components/Icon'

const { width, height } = Dimensions.get('window')

const TILE_SIZE = width / 2 - 2

const LeftMenu = () => {
	const isOpened = useSelector(state => state.app.isMenuOpened)
	const dispatch = useDispatch()
	const [widthAnim] = useState(new Animated.Value(0))

	React.useEffect(() => {
		Animated.timing(widthAnim, {
			toValue: isOpened ? width / 2 : 0,
			duration: 250,
		}).start()
	}, [isOpened])

	return (
		<>
			<Animated.View style={{ ...styles.container, width: widthAnim }}>
				<MenuTile
					size={TILE_SIZE}
					icon={<Icon size={64} icon='coffee' color={COLORS.creamLight} />}
					onClick={() => dispatch(toggleMenuAction())}
				/>

				<MenuTile
					size={TILE_SIZE}
					icon={<Icon size={64} icon='like' color={COLORS.creamLight} />}
					onClick={() => dispatch(toggleMenuAction())}
				/>
			</Animated.View>
		</>
	)
}

export default LeftMenu

const styles = StyleSheet.create({
	container: {
		width: width / 2,
		backgroundColor: COLORS.mainDarkest,
		height,
		zIndex: 200,
		overflow: 'hidden',
		borderRightColor: COLORS.creamLight,
		borderRightWidth: 2,
		marginLeft: -2,
	},
	dismiss: {
		position: 'absolute',
		width,
		height,
		opacity: 0.5,
		zIndex: 199,
		backgroundColor: COLORS.black,
	},
})
