

var resto = 10%2;
console.log( resto );


function imparPares()
{
    var i =0;
    while(i < 20)
    {
        if( i %2 == 0)
            console.log(i + ' é par!');
        else
            console.log(i + ' é impar!');
        
        i++;
    }
}

function somaPares(n)
{
    var soma=0;

    var i =0;
    while(i < n)
    {
        if( i %2 == 0)
            soma += i;
        
        i++;
    }

    return soma;
}

console.log(somaPares(20));