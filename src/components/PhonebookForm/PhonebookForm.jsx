import { Component } from 'react';
import { Form, BtnAddContact, Input } from './PhonebookForm.styles';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSetUserInfo = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContact = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form autocomplete="off" onSubmit={this.handleAddContact}>
        <label>
          <p>Name</p>
          <Input
            onChange={this.handleSetUserInfo}
            value={name}
            type="text"
            name="name"
            autocomplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p>Number</p>
          <Input
            onChange={this.handleSetUserInfo}
            value={number}
            type="tel"
            name="number"
            autocomplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Form>
    );
  }
}

export default PhonebookForm;
