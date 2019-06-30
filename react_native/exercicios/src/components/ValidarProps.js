import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props => 
    <Text style={{ fontSize: 34}}>
        {props.label}
        {props.ano + 2000}
    </Text>


// Caso não ter nenhum valor (props undefined) terá valores padrões nas props
ValidarProps.defaultProps = {
    label: 'Ano: '
}

// Definir tipos para propriedades
ValidarProps.propTypes = {
    // To dizendo aqui que o tipo do ano precisa ser numero (number) e é requerido (isRequired)
    ano: PropTypes.number.isRequired 
}

export default ValidarProps