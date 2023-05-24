import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/reducer';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { Filter } from './filter/Filter';
import css from './App.module.css';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      dispatch(addContact(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }
  };

  const filterContacts = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  const filteredContacts = filterContacts(filter);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={String(filter)} onChangeInput={handleInputChange} />
      <ContactList
        delContact={handleDeleteContact}
        contacts={filteredContacts}
      />
    </div>
  );
}
