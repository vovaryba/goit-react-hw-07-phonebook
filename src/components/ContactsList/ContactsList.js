import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
  contactsActions,
} from 'redux/contacts';
import Contact from './Contact';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  //   const isLoading = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <>
      {/* {isLoading && <h1>Loading...</h1>} */}
      {contacts.length > 0 && (
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
      )}
    </>
  );
};

export default ContactsList;
