import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { Filter } from './filter/Filter';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState([
    {
      id: nanoid(),
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: nanoid(),
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: nanoid(),
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: nanoid(),
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ]);
    }
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'filter') {
      setFilter(value);
    }
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeInput={handleInputChange} />
      <ContactList delContact={deleteContact} contacts={filterContacts()} />
    </div>
  );
}
