import React from 'react';

export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
}
