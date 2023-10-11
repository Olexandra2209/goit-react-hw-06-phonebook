import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchInput from './SearchInput/SearchInput';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  return (
    <div style={{ marginLeft: '30px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <SearchInput />
      <ContactList />
    </div>
  );
};

export default App;
