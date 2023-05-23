import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm=  ( {addContact} )=>  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <br  />
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
          placeholder="John Dow"
          required
        />
      </label>
      <br  />
      <label>
        Phone number
        <br  />
        <input
          className={css.input}
          type="tel"
          value={number}
          onChange={handleNumberChange}
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="123-45-67"
          required
        />
      </label>
       <br  />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
