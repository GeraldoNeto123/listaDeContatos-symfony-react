import actionsTypes from '../constants/ActionsTypes';

const actions = {
    addContato: contato => ({
        type: actionsTypes.ADD_CONTATO,
        contato
    })
};

export default actions;
