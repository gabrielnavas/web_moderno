function myFunc()
{
    var a = 1, b=2, c=3;
    return [a,b,c];
}

console.log(myFunc())

function myFunc2()
{
    var x =0;
    return (x += 2, x);
}

console.log(myFunc2()); // x -> 2

function myFunc3()
{
    var y = 2;
    return --y;
}

console.log(myFunc3()) // y -> 1

function myFunc4(x){
    return (x--, ++x, x+=2);
}

console.log( myFunc4(10) ); // x -> 12