import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { toggleMenuAction } from '../../actions/app'
import Header from '../../components/Header'
import CoffeeTypesGrid from './CoffeeTypesGrid'
import CoffeeDetail from './CoffeeDetail'

class TypesPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedCoffee: 'Ristretto',
		}
	}

	setSelectedCoffee(coffee) {
		this.setState({ selectedCoffee: coffee })
	}

	render() {
		return (
			<View style={styles.container}>
				<Header
					menuClicked={this.props.toggleMenu}
					isMenuOpened={this.props.isMenuOpened}
				/>
				<CoffeeTypesGrid
					selectedCoffee={this.state.selectedCoffee}
					selectNewCoffee={c => this.setSelectedCoffee(c)}
				/>
				<CoffeeDetail selectedCoffeeName={this.state.selectedCoffee} />
			</View>
		)
	}
}

const mapStateToProps = state => ({ isMenuOpened: state.app.isMenuOpened })
const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenuAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TypesPage)

const styles = StyleSheet.create({
	container: {},
})
