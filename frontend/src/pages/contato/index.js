import React, {Component} from 'react';
import api from '../../services/api';
export default class Contato  extends Component {
    state = {
        contato: {},
    };
    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/contato/${id}`);
        this.setState({contato: response.data.contatos});
    }

    render(){
        const {contato} = this.state;
        return (
            <div className="contato-info">
                <h1>{contato.name}</h1>
                <p>{contato.telefone}</p>
                
            </div>
            );
    }
}