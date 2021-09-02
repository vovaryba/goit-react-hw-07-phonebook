import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactShelfAPI from 'services/contactshelf-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactShelfAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
