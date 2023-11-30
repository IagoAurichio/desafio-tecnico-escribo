const somaDivisiveis = (numero) => {
    let somatorio = 0
    if(numero <= 0){
        console.error(`O número ${numero} não é inteiro positivo!`)
        return null
    }

    for(let i = 1; i < numero; i++){
        if(i % 3 === 0 || i % 5 === 0) somatorio += i
    }
    return somatorio
}



