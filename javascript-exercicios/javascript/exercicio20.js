function aritmetica(codigo,qtde){
    switch(codigo){
        case 1001:
            return 'total a pagar:' + qtde * 5.32
            break
        case 1324:
            return 'total a pagar:' + qtde * 6.45
            break
        case 6548:
            return 'total a pagar:' + qtde * 2.37
            break
        case 0987:
            return 'total a pagar:' + qtde * 5.32
            break
        case 7623:
            return 'total a pagar:' + qtde * 6.45
            break
        default:
            return 'opção inválida!'
    }
}
console.log(aritmetica(1324,3))
console.log(aritmetica(1001,1))
console.log(aritmetica(101,11))
console.log(aritmetica(0987,5))