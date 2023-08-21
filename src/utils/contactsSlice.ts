import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Contact = {
  id: string;
  firstname: string;
  lastname: string;
  status: string;
  // Add more fields as needed
};

const initialState: Contact[] = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export default contactsSlice.reducer;
export const { addContact, deleteContact, editContact } = contactsSlice.actions;
