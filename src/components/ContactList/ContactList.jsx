import propTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveContact } from 'redux/slices/contactSlice';
import { Notify } from 'notiflix';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (

    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => 
                dispatch(
                  handleRemoveContact(contact.id),
                  Notify.warning("Contact was deleted"),
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