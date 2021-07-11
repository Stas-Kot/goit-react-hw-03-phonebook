import PropTypes from 'prop-types';
import { ContactItem, DeleteBtn } from './ContactListItem.styles';

export default function ContactListItem({ name, number, deleteContact }) {
  return (
    <ContactItem>
      {name}: {number}
      <DeleteBtn type="button" onClick={deleteContact}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
