import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operations';
import * as contactsActions from './contacts-actions';

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
