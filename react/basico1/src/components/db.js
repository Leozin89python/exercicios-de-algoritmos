const LOGISTICA = '_LOGISTICA'

export default class Expedicao {

    tabelado = () =>{
       const logisticos = localStorage.getItem(LOGISTICA)
       return JSON.parse(logisticos)
    }

    salvar = (logistico) =>{
      let logisticos = localStorage.getItem(LOGISTICA)
      if(!logisticos){
        logisticos = []
      }else{
        logisticos = JSON.parse(logisticos)
      }

      logisticos.push(logistico)
      localStorage.setItem( LOGISTICA, JSON.stringify(logisticos))
    }
}