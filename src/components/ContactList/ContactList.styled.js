import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  background-color: #f8f8f8;

  &:hover {
    background-color: #e0e0e0;
  }

  button {
    background-color: grey;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #c82333;
    }
  }
`;
