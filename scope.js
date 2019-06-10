let x2= 2;

function f2() {
    y=2;
    let z = 4;
    console.log("local function variable -> " + z);
    console.log("x2 -> " + x2);
}

f2()
console.log("global y -> " + y);

/*
function fuc1(params) {
    var x=2;
}
console.log("x -> " + x);
*/