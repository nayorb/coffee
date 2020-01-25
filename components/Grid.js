import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get('window')

import COLORS from '../constants/colors'

const Grid = ({ children }) => {
  return (
    <View style={styles.grid}>{children}</View>
  )
}

export default Grid

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: COLORS.gray,
  }
})