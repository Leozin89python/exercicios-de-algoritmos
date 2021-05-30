function aritmetica(altura,sexo){
      if(sexo === 'm'|| sexo ==='M'){
            peso = (72.7 * altura) - 58
            return 'peso ideal:' + peso.toFixed(2)
    } if(sexo === 'f'|| sexo ==='F'){
            peso = (62.1 * altura) - 44.7
            return 'peso ideal:' + peso.toFixed(2)
    }
}
console.log(aritmetica(1.64,'m'))