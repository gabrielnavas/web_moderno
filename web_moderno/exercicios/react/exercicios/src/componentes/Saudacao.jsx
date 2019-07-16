import React, { Component } from 'react'

export default class Saudacao extends Component {
    //state pode ser alterado
    //propriedades passadas na classe la fora nao
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) {
        super(props)


        //Amarrar o this fora do constructor com as funcoes certas
        this.setTipo = this.setTipo.bind(this)
    }   

    setTipo(e) {
        this.setState({tipo: e.target.value}) 
    }
    
    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        // Atenção this aqui é o objeto.
        const { tipo, nome} = this.state
        return (
            <div>
                <h1> {tipo} {nome}!</h1>
                <hr/>
                <input 
                    type="text" 
                    placeholder="tipo..." 
                    value={tipo}
                    onChange={this.setTipo}
                />
                <input 
                    type="text" 
                    placeholder="nome..." 
                    value={nome}
                    // chamando uma funcao anonima nao precisa de bind
                    onChange={event => this.setNome(event)}
                />
            </div>
        )
    }
}