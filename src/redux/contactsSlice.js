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
    },
    filter: state => {
      state.value -= 1;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addItems } = contactsSlice.actions;

//Selectors

export const getContacts = state => state.contacts.items