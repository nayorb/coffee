import React, { useState } from 'react'
import { Animated, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

import COLORS from '../../constants/colors'
import { toggleMenuAction } from '../../actions/app'
import MenuTile from '../../components/MenuTile'
import Icon from '../../components/Icon'

const { width, height } = Dimensions.get('window')

const MENU_SIZE = width / 3

const LeftMenu = ({ navigation, focus }) => {
  const isOpened = useSelector(state => state.app.isMenuOpened)
  const dispatch = useDispatch()
  const [widthAnim] = useState(new Animated.Value(-MENU_SIZE))

  React.useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: isOpened ? 0 : -MENU_SIZE,
      duration: 250,
    }).start()
  }, [isOpened])

  const navigate = screen => {
    dispatch(toggleMenuAction())
    navigation.navigate(screen)
  }

  return (
    <>
      {isOpened ? (
        <TouchableOpacity
          style={styles.dismiss}
          onPress={() => dispatch(toggleMenuAction())}
        />
      ) : null}
      <Animated.View style={{ ...styles.container, marginLeft: widthAnim }}>
        <MenuTile
          size={MENU_SIZE}
          icon={
            <Icon
              size={64}
              icon="coffee"
              color={COLORS.creamLight}
              type={focus === 'Home' ? 'ios-filled' : 'ios'}
            />
          }
          onClick={() => navigate('Home')}
        />

        <MenuTile
          size={MENU_SIZE}
          icon={
            <Icon
              size={64}
              icon="like"
              color={COLORS.creamLight}
              type={focus === 'Favourites' ? 'ios-filled' : 'ios'}
            />
          }
          onClick={() => navigate('Favourites')}
        />
      </Animated.View>
    </>
  )
}

export default LeftMenu

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.mainDarkest,
    height,
    zIndex: 200,
    overflow: 'hidden',
    paddingTop: Constants.statusBarHeight + 49,
    marginLeft: -MENU_SIZE,
  },
  dismiss: {
    position: 'absolute',
    width,
    height,
    opacity: 0.8,
    zIndex: 199,
    backgroundColor: COLORS.black,
  },
})
