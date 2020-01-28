import React, { useState } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

import COLORS from '../constants/colors'
import Icon from './Icon'
import ClickableIcon from './ClickableIcon'

const { width, height } = Dimensions.get('window')

const ICON_SIZE = 24

const Header = ({ menuClicked, title, searchClicked }) => {
  return (
    <View style={styles.container}>
      <ClickableIcon
        size={ICON_SIZE}
        color={COLORS.creamLight}
        icon="menu"
        onClick={menuClicked}
      />
      <Text style={styles.title}>{title}</Text>
      <ClickableIcon
        size={ICON_SIZE}
        color={COLORS.creamLight}
        icon="search--v1"
        onClick={searchClicked}
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
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    height: 50,
    width,
  },
  title: {
    color: COLORS.main,
    fontSize: 24,
    textTransform: 'uppercase',
  },
})
