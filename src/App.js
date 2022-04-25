import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { addItems, getContacts, getFilter } from 'redux/contactsSlice';

function App() {
  const contactsRedux = useSelector(getContacts)
  const dispatch = useDispatch();

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');



  // const deleteContact = event => {
  //   event.preventDefault();
  //   const idDeletedContact = event.currentTarget.id;
  //   setContacts(prevState => {
  //     console.log(prevState);
  //     return prevState.filter(contact => contact.id !== idDeletedContact);
  //   });
  // };

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };
  //   if (
  //     !contacts.find(
  //       oldContact =>
  //         oldContact.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     setContacts([contact, ...contacts]);
  //   } else {
  //     alert(`${contact.name} is already in contacts`);
  //   }
  // };

  // const addFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const filterContacts = () =>
  //   contactsRedux.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <div>
            {console.log(contactsRedux)}
      <h1>Phonebook</h1>
      <ContactForm ></ContactForm>
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      />
    </div>
  );
}

export default App;
