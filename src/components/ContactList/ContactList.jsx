import { addFilter, getFilter, addItems, getContacts } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts)

  const filterContacts = 
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
}
