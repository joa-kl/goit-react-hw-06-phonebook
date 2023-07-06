import propTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveContact } from 'redux/slices/contactSlice';
import { Notify } from 'notiflix';

export const ContactList = () => {


  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const isVisibleContacts = () => 
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  
  const filterContact = isVisibleContacts();

  const dispatch = useDispatch();
  

  return (

    <div>
      <ul>
        {filterContact.map((contact) => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => 
                dispatch(
                  handleRemoveContact(contact.id),
                  Notify.success("Contact was deleted"),
              )}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
)};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};