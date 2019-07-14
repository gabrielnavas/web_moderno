const nomes = [
    'gabriel',
    'navas',
    'joaquim',
    'maria',
    'ana'
]

function retornaNomes(nomes) {
    return new Promise ( (resolve, reject) => {
        resolve(nomes)
        reject(nomes)
    })
}


retornaNomes(nomes).then(nomes => console.log(nomes))