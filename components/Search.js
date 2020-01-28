import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { changeSearchTextAction } from '../actions/app'
import { useDispatch, useSelector } from 'react-redux'
import COLORS from '../constants/colors'
import Animated, { Easing } from 'react-native-reanimated'

const SEARCH_HEIGHT = 50

const Search = () => {
  const searchActive = useSelector(state => state.app.searchActive)

  const dispatch = useDispatch()
  const searchText = useSelector(state => state.app.searchText)
  const [heightAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: searchActive ? 1 : 0,
      duration: 250,
      easing: Easing.ease,
    }).start()
  }, [searchActive])

  const heightValue = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SEARCH_HEIGHT],
  })

  return (
    <Animated.View style={{ ...styles.container, height: heightValue }}>
      <TextInput
        style={{ ...styles.input }}
        onChangeText={text => dispatch(changeSearchTextAction(text))}
        value={searchText}
        placeholder="Search"
      />
      {/* <Button
        style={styles.clearButton}
        title="Clear"
        onPress={() => dispatch(changeSearchTextAction(''))}
      /> */}
    </Animated.View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    // marginVertical: 2,
    position: 'relative',
  },
  input: {
    backgroundColor: COLORS.creamLight,
    height: '100%',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    height: 30,
    color: COLORS.creamLight,
    zIndex: 180,
    backgroundColor: COLORS.mainDark,
  },
})
