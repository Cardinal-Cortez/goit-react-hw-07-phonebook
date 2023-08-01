import { Todo } from "components/Todo"; 
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "Redux/operations";
import { List } from "./styled";
import PropTypes from "prop-types";
import { filters } from "Redux/selectors";


export const ContactList = () => {

  const dispatch = useDispatch();
    const filter = useSelector(filters);

  return (
    <List>
      {filter.map((item) => (
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
