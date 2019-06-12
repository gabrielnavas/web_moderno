var arr = [1,2,3];


function myFunction(arg){
    return arg;
}

console.log(myFunction(arr));

function myFunction2(arg){
    return arg[2];
}

console.log(myFunction2(arr));
console.log( myFunction2([true, [2,3], {nome:'gabriel', idade:26}]) );