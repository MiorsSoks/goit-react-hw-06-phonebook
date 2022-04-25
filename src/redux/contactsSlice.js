import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      console.log(action.payload)
    },
    deleteItems: (state, action) => {
      state.items.filter(contact => contact.id !== action.payload );
      console.log(state.items)
    },
    addFilter: (state, action )=> {
      state.filter = `${action.payload}`;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items']
};

export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addItems } = contactsSlice.actions;
export const { addFilter } = contactsSlice.actions;
export const { deleteItems } = contactsSlice.actions;

//Selectors

export const getContacts = state => state.contacts.items
export const getFilter = state => state.contacts.filter

     // state.items.push({ id: '1', name: 'sffgs', number: '345'});