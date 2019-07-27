function falarDepoisDe(segundos, frase) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then( frase => frase.concat('?!?'))
    .then( frase => frase.concat(' posso fazer'))
    .then( frase => frase.concat(' quantos then'))
    .then( frase => frase.concat(' eu quiser'))
    .then( frase => console.log(frase))
    .catch( error => console.log(error)) //Caso der error na implementação



// Outro teste    
function printarVariavel(variavel, fraseError) {
    return new Promise ( (resolve, reject) => {
        resolve(variavel)
        reject(fraseError)
    })
}

const variavel = 'Oi, sou uma variavel'
printarVariavel(variavel, 'Variavel nao existe')
    .then(variavel => console.log(variavel))
    .catch( error => console.log(error))
