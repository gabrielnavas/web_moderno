function teste(i) {
    if(i < 10)
        console.log('numero: ' + i++)

    setTimeout(() => teste(i), 1000)
}

teste(0)