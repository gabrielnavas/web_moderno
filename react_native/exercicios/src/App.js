import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'

export default class App extends React.Component {
	render(){
		return (
			<View style={style.container}>
				<Simples texto='Ola eu sou a leontina'/>
				<ParImpar numero={30} />
				<Inverter texto='Sou um texto invertido' />
				<MegaSena numeros={10} />
			</View>
		)	
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})