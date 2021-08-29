import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import Contact from './Contact';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
