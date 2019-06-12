var test;


//0 === false
if( 0 ){ test = true; } else {test = false};
console.log(test);

//1 == true
if( 1 ){ test = true; } else {test = false};
console.log(test);

//string vazia == false
if ( '' ) { test = true; } else { test = false; }
console.log(test);


//string com conteudo === true
if ( 'gabriel' ) { test = true; } else { test = false; }
console.log(test);

//undefined  === false
if ( undefined ) { test = true; } else { test = false; }
console.log(test);


//null  === false
if ( null ) { test = true; } else { test = false; }
console.log(test);


//{}  === true
if ( {} ) { test = true; } else { test = false; }
console.log(test);


//[]  === true
if ( [] ) { test = true; } else { test = false; }
console.log(test);

//NaN  === false
if ( NaN ) { test = true; } else { test = false; }
console.log(test);


//-0  === false
if ( -0 ) { test = true; } else { test = false; }
console.log(test);


//true  === true
if ( true ) { test = true; } else { test = false; }
console.log(test);

//false  === false
if ( false ) { test = true; } else { test = false; }
console.log(test);


// false -> !false = true -> !!false = false
console.log(!!false);


// !'' == true
console.log(!'');