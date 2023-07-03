import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactSlice';

export const Filter = ({ filter, onFilterChange }) => {

  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
    <div className={css.container}>
      <label className={css.filterLabel}>Find contacts by name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
        onChange={event => dispatch(filterContact(event.target.value))}
      />
    </div>
)};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};