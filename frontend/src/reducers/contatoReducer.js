import actionsTypes from '../constants/ActionsTypes';

const INITIAL_STATE = {
    nome: []
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case actionsTypes.ADD_CONTATO:
            return{ ...state, nome: [...state.nome, action.contato]};

        default:
            return state;
    }
}