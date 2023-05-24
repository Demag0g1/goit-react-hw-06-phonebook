import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      state.push({ id: nanoid(), name, number });
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
    setFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
