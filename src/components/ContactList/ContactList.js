import React from 'react';
import { ListContainer, ListItem } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ListContainer>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </ListItem>
      ))}
    </ListContainer>
  );
}
