import { Todo } from "components/Todo"; 
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "Redux/operations";
import { List } from "./styled";
import { selectContacts, selectFilter } from "Redux/selectors";
import PropTypes from "prop-types";


export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  
  const filters = () => {
    
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <List>
      {filters().map((item) => (
        <Todo
          {...item}
          key={item.id}
          onDelete={() => dispatch(deleteContacts(item.id))}
        />
      ))}
    </List>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
