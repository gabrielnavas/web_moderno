const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


console.log(ferrari.__proto__)
console.log(volvo.__proto__)

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

console.log(typeof Object.prototype)
console.log(typeof ferrari.__proto__)

function myFunc(){}
console.log(myFunc.prototype)