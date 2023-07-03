import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useEffect, useState } from 'react';

export const App = () => {

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2> Contacts</h2>
        <Filter  />
        <ContactList/>
      </div>
    );
};

export default App;
