import React, { Component } from "react"
import './App.css'

import DB from './components/db'
import Tabela from './components/consulta'

export default class App extends Component {
  constructor(){
    super()
    this.Banco = new DB()
  }

  state={
    nome:'',
    email:'',
    produto:'',
    preco: 0,
    endereco:'',
    status:[]
  }

  limpar = () =>{
    this.setState({
    nome:'',
    email:'',
    produto:'',
    preco: 0,
    endereco:'',
    status:[]
    })
  }

 enviar = (e) =>{
   let valor = e.target.value
   let nome = e.target.name
   this.setState({
     [nome]:valor
   })
 }

 submeter = () =>{
   let info = {
    nome:this.state.nome,
    email:this.state.email,
    produto:this.state.produto,
    preco: this.state.preco,
    endereco:this.state.endereco,
    status:this.state.status
   }
   this.Banco.salvar(info)
   this.limpar()
 }

  render() {
    return (
      <div>
          <div className="header">
              <h1 className="store">CD 04  - Salvador</h1>
          </div>      

          <div className="form">
                <div className="linha1">
                  <input className="put1"
                    name="nome"
                    placeholder="insira o nome do cliente ..."
                    type="text"
                    value={this.state.nome}
                    onChange={this.enviar}/>
                  <input className="put2"
                    name="email"
                    placeholder="insira o email do cliente ..."
                    type="text"
                    value={this.state.email}
                    onChange={this.enviar}/>
                </div>
                
                <div className="linha2">
                  <input className="put1"
                    name="produto"
                    placeholder="insira o nome do item em compra ..."
                    type="text"
                    value={this.state.produto}
                    onChange={this.enviar}/>
                  <input className="put2"
                    name="preco"
                    placeholder="insira o preço do item em compra ..."
                    type="number"
                    value={this.state.preco}
                    onChange={this.enviar}/>
                </div>

                <input className="put3"
                    name="endereco"
                    placeholder="insira o endereco de destino da compra ..."
                    type="text"
                    value={this.state.endereco}
                    onChange={this.enviar}/>

                <select className="check"
                  name="status"
                  value={this.state.status}
                  onChange={this.enviar} >
                    <option>estado do pedido ...</option>
                    <option>aprovado</option>
                    <option>negado</option>
                    <option>pendente</option>
                    <option>em análise</option>
                </select>

                <button className="enviar" onClick={this.submeter}>enviar</button>
                <button className="limpar" onClick={this.limpar}>limpar</button>
          </div>
          <br/>
           <br/>
            <br/>
              <hr/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <hr/>
             <Tabela/>
      </div>
    );
  }
}
