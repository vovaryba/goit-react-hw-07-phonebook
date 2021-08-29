import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
