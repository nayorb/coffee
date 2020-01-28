import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { connect, useSelector, useDispatch } from 'react-redux'

import {
  toggleMenuAction,
  selectCoffeeAction,
  toggleSearchAction,
} from '../../actions/app'
import Header from '../../components/Header'
import CoffeeTypesGrid from './CoffeeTypesGrid'
import CoffeeDetail from './CoffeeDetail'
import LeftMenu from '../menu/LeftMenu'
import Search from '../../components/Search'

const TypesPage = ({ navigation }) => {
  const selectedCoffee = useSelector(state => state.app.selectedCoffee)
  const isMenuOpened = useSelector(state => state.app.isMenuOpened)
  const searchText = useSelector(state => state.app.searchText)

  const coffees = useSelector(state => state.coffee).filter(coffee =>
    coffee.title.toLowerCase().includes(searchText.toLowerCase())
  )

  const dispatch = useDispatch()

  const setSelectedCoffee = coffee => dispatch(selectCoffeeAction(coffee))

  return (
    <View style={styles.container}>
      <LeftMenu navigation={navigation} focus={navigation.state.key} />
      <Header
        menuClicked={() => dispatch(toggleMenuAction())}
        searchClicked={() => dispatch(toggleSearchAction())}
        isMenuOpened={isMenuOpened}
        title="Coffee types"
      />
      <Search />
      <ScrollView>
        <CoffeeTypesGrid
          coffees={coffees}
          selectedCoffee={selectedCoffee}
          selectNewCoffee={c => setSelectedCoffee(c)}
        />
      </ScrollView>
    </View>
  )
}

export default TypesPage

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
})
