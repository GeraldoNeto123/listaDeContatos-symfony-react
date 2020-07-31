import React, {Component} from 'react';
import api from '../../services/api';
import {link, Link} from 'react-router-dom';
import './styles.css';
export default class Main extends Component{
    state = {
        contatos: [],
    }

    componentDidMount(){
        this.loadContatos();
    }
    loadContatos = async () =>{
        const response = await api.get('/contato/');
        this.setState({contatos: response.data.contatos});
        // console.log(response.data.contatos);
    }
    render(){
    return <div className="contato-list">
        {
            this.state.contatos.map(
                contato => (
                <article key={contato.id}>
                    <strong>Nome: {contato.name}</strong>
                <p>Telefone: {contato.telefone}</p>
                <Link to={`/contato/${contato.id}`}>Acessar</Link>
                </article>
                )
            )
        }
        <h6>{this.state.contatos.length} Contatos</h6>
    </div>;
    }
    // <h1>{this.state.contatos.length} Contatos</h1>
}
