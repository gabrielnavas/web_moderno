function person(){
    return {
        name: 'Gabriel',
        lasName: 'Navas'
    };
};

console.log(person());
console.log(person().name);
console.log(person().lasName);


function adder(x) {
    function addOther(y){
        return x+y;
    }

    return addOther;
}

function adder2(x) {
    return function addOther2(y){
        return x+y;
    }
}

var result = adder(2);
console.log(result);

var result2 = adder2(2);
console.log(result2);