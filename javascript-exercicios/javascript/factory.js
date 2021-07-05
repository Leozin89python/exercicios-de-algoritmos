class _interface {

    _interface(){}
    
    brasileiro(a,b,c) {
        console.log(`nacionalidade: brasileiro, nome: ${a},  idioma: ${b}, dinheiro: ${c},00 reais`)
    }

    britanico(a,b,c) {
        console.log(`nacionality: british, name: ${a},  language: ${b}, cash: ${c},00 dolars`)
    }

    espanhol(a,b,c) {
        console.log(`nacionalidad: espanol, nombre: ${a},  idioma: ${b}, dinero: ${c},00 euros`)
    }
}

var factory =  function(e,nome,lingua,moeda) {
    var itfc = new _interface()
    if(e == 'brasil') {
        itfc.brasileiro(nome,lingua,moeda)
    }else if(e == 'inglaterra') {
        itfc.britanico(nome,lingua,moeda)
    }else if(e == 'espanha') {
        itfc.espanhol(nome,lingua,moeda)
    }
}

factory('espanha','Luana Almozagna', 'espanhol',35)
factory('brasil','Maria Antonia', 'português',122)
factory('inglaterra','Anthony Hopkins', 'english',65)


