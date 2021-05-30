let algebra1 = (custoDeProducao) =>{
    var percentualDoDistribuidor = (28/100)
    var imposto = (45/100)
    
    var custoDeFabrica = (imposto * custoDeProducao) + custoDeProducao
    var custoAoConsumidor = custoDeFabrica + (percentualDoDistribuidor * custoDeFabrica)
    
    return 'custo de fábrica:' + custoDeFabrica.toFixed(3) + ',' + 'custo ao consumidor:' + custoAoConsumidor.toFixed(3)
}
console.log(algebra1(1000))