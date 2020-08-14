import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionsContato from '../../actions/contato';

import './styles.css';

function Test() {
    const [newContatoText, setNewContatoText] = useState('');
    const contato = useSelector(state => state.contatoReducer.nome);
    const dispatch = useDispatch();

    function addNewContato(){
        dispatch(actionsContato.addContato(newContatoText));
        setNewContatoText('');
    }

    return(
        <div>
            <ul>
                {contato.map(contato => <li key={contato}>{contato}</li> )}
            </ul>
            
            <input 
                type="text"
                value={newContatoText}
                onChange={(e)=> setNewContatoText(e.target.value)}
             />
            <button onClick={addNewContato}>Novo Contato</button>
        </div>
    );
}

export default Test;