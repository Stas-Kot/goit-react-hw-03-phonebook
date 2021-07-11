import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import SearchContact from 'components/SearchContact/SearchContact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Klinel', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    this.state.contacts.find(savedContact => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  handleSearch = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
  }

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFiltredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm handleSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <SearchContact value={filter} inputChange={this.handleSearch} />
        <ContactList
          contacts={filtredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
