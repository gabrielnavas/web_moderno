const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const isMulher = funcionario => funcionario.genero === 'F'

const isChina = funcionario => funcionario.pais === 'China'

const menorSalario = (funcAcumulado, funcAtual) => {
    return funcAtual.salario < funcAcumulado.salario ? funcAtual : funcAcumulado
}

// axios.get() faz uma requisicao get retornando uma lista para funcionarios
axios.get(url).then(response => {
    const funcionarios = response.data


    // Desafio pegar menor salário de mulher e que mora na china
    const menorFuncionario = funcionarios.
                                filter(isMulher).
                                filter(isChina).
                                reduce(menorSalario)

    console.log(menorFuncionario)                            
})









