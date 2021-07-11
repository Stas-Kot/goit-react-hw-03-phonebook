import styled from '@emotion/styled/macro';

export const Form = styled.form`
  width: 350px;
  border: 2px solid black;
  padding: 30px 15px;

  & label {
    font-weight: 500;
  }
  & p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const BtnAddContact = styled.button`
  display: block;
  border-radius: 8px;
  background-color: #fff;
  color: black;
  font-weight: 500;
  padding: 5px 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-color: transparent;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #6ea2de;
  }
`;

export const Input = styled.input`
  margin-bottom: 30px;
  &:focus {
    border: 2px solid #6ea2de;
    box-shadow: 0px 0px 10px #6ea2de;
    outline: none;
  }
`;
