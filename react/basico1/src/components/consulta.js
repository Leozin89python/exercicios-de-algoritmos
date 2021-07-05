import React, {Component} from 'react'
import './Consulta.css'

import DB from './db'

export default class Consulta extends Component{
    constructor(){
      super()
      this.Banco = new DB()
    }

    state = {
      logisticos : []
    }

 componentDidMount = () =>{
    const logisticos = this.Banco.tabelado()
    this.setState({
      logisticos
    })
 }

      render(){
          return(
              <React.Fragment>
                  <h2 className="table">registro de pedidos</h2>
                  <div className="tabela">
                  <table className="registro" border="1px"> 
                        <thead className="cabecalho">
                                <tr>
                                    <td>nome</td>
                                    <td>email</td>
                                    <td>produto</td>
                                    <td>preço</td>
                                    <td>endereço</td>
                                    <td>status</td>
                                </tr>
                        </thead>

                        <tbody>
                            {
                              this.state.logisticos.map( (e,index) => {
                                 return(
                                        <tr key={index}>
                                          <td>{e.nome}</td>
                                          <td>{e.email}</td>
                                          <td>{e.produto}</td>
                                          <td>{e.preco}</td>
                                          <td>{e.endereco}</td>
                                          <td>{e.status}</td>
                                </tr>
                                 )
                              })
                            }
                        </tbody>
                  </table>
                  </div>
              </React.Fragment>
          )  
      }
}