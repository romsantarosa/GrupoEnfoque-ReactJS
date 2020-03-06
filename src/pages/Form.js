import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import whoareimg from "../components/image/a-empresa.jpg";
import './Form.css'

export default class Form extends Component {
    constructor(props){
    super(props)
        this.state = { 
            name:'', 
            email: '',
            comment:''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleComment = this.handleComment.bind(this)
    }

render() {

    return (

        <>
        <section className='bgformpage'>
        <img className="imgwhoare" src={whoareimg} alt="Logotipo Enfoque" />

        <h2 className='titlecontact'>Para mais informações, deixe o seu contato</h2>

        <article className='form-container'>
            
            <form className='mainform' onSubmit={this.handleSubmit}>
                <div >
                <label htmlFor="name"> Nome </label>
                <input name="name" id="name" placeholder="Digite o nome"
                    value={this.state.nome} onChange={this.handleNameChange} />
                </div>
                
                <div>
                <label htmlFor="email"> Email </label>
                <input name="email" id="email" placeholder="Digite o seu email" espaço reservado="Enter email"
                    value={this.state.email} onChange={this.handleEmailChange}/>
                </div><br/>

                <div>
                <label htmlFor="email"> Comentário </label>
                <textarea name="text" id="text" placeholder="Escreva aqui o seu comentário"
                    value={this.state.comment} onChange={this.handleComment}/>
                </div>
               
                <Button type="submit">
                    Enviar
                </Button>
                
            </form>
   
        </article>
        </section>
        </>


    )

    }
   
   handleNameChange = e => this.setState ({ name: e.target.value })
   handleEmailChange = e => this.setState ({ email: e.target.value })
   handleComment = e => this.setState ({ comment: e.target.value })
    
            
    handleSubmit =  e => { 
        e.preventDefault()
        alert (`O usuário é: ${this.state.name}  \n email: ${this.state.email} \n comentário: ${this.state.comment}`) 
    }

}
