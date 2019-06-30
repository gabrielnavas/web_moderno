import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'

export default createDrawerNavigator({
    Evento: {
        screen: () => <Evento/>
    },
    ValidarProps : {
        screen: () => <ValidarProps ano={18}/>
        // screen: () => <ValidarProps label='Ano: '/> //Ano: Nan pois nao tem parametro na propriedade
        // screen: () => <ValidarProps /> // Ano: Nan pois nao tem parametro na propriedade
    },
    Platiformas : {
        screen: () => <Plataformas />
    },    
    Contador : {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='react Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numeros={5} />,
        navigationOptions: { title: 'Par & Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300})