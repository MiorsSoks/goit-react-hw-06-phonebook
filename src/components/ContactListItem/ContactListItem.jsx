import PropTypes from "prop-types";
import { addFilter, getFilter, addItems, getContacts, deleteItems } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonFilter, ListItem } from "./ContactListItem.styled";



export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts)

  const deleteContact = event => {
    event.preventDefault();
    const idDeletedContact = event.currentTarget.id;
    dispatch(deleteItems(
    idDeletedContact
    ));
    console.log(idDeletedContact);
  };

  return (
    <ListItem key={id}>
      {name} {number}
      <ButtonFilter type="button" id={id} onClick={deleteContact}>
        Delete
      </ButtonFilter>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
