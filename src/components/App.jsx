import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <section className={css.conteiner}>
      <header>Phonebook</header>
      <ContactForm />
      <section>
        <Filter />
        <ContactList />
      </section>
    </section>
  );
};
