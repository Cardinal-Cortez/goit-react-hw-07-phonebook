import { Number, Item, Name, ButtonDel } from "./styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContacts } from "Redux/operations";

export const Todo = ({ id, name, phone}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul>
      <Item>
        <Name>{name}</Name>
        <Number>{phone}</Number>
        <ButtonDel onClick={handleDelete}>Delete</ButtonDel>
      </Item>
    </ul>
  );
};

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};