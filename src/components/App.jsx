import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  updateFilter,
} from '../redux/contactsSlice';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import SearchInput from './SearchInput/SearchInput';
import { initializePersist } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContactHandler = ({ name, number }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    dispatch(initializePersist());
  }, [contacts, dispatch]);

  return (
    <div style={{ marginLeft: '30px' }}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <SearchInput value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContactHandler}
      />
    </div>
  );
};
