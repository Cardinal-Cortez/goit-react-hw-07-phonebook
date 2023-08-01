import { InputAddNumber } from './styled'
import PropTypes from "prop-types";

export const InputNumber = ({handleNumberChange, phone}) => {

    return (
        <div>
            <h2>Number</h2>
            <InputAddNumber onChange={handleNumberChange}
                value={phone}
                type="tel"
                name="phone"
                pattern= "^(\\+?[0-9.\\(\\)\\-\\s\]*)$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </div>
    );
};

InputNumber.propTypes = {
    handleNumberChange: PropTypes.func.isRequired,
    phone: PropTypes.string.isRequired,
};
