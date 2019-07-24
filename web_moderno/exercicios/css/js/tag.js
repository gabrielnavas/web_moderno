const colors = {
    p : '#388e3c',
    div: '#1565c0',
    span: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get (tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

//Faz aparecer o nome da div nos na paǵina
document.querySelectorAll('.tag').forEach(element => {
    const tagName = element.tagName.toLowerCase()
    element.style.borderColor = colors.get(tagName)
    
    // caso nao tiver elemento label na tag, inserir o label dentro do elemento antes de qualquer elemento
    if(!element.classList.contains('noLabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        element.insertBefore(label, element.childNodes[0])
    }
});