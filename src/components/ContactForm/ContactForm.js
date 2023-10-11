import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { FormContainer, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const addContactHandler = () => {
    if (!name || !number) return;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Phone number"
      />
      <Button onClick={addContactHandler}>Add Contact</Button>
    </FormContainer>
  );
};

export default ContactForm;
