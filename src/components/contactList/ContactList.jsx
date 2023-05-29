import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { delContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsFiltered = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelContact = id => {
    dispatch(delContact(id));
  };
  if (!contactsFiltered?.length) {
    return (
      <div>
        {' '}
        <br />
        No contacts found ¯\_(ツ)_/¯{' '}
      </div>
    );
  }

  return (
    <ul className={css.list}>
      {contactsFiltered.map(({ id, name, number }) => (
        <div className={css.item} key={id}>
          <span>{name}:</span>
          <span className={css.number}>{number}</span>
          <button
            className={css.button}
            type="button"
            onClick={() => onDelContact(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};
