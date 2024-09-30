import { useState } from "react";
import PropTypes from 'prop-types';
import Button from "../../../common/components/Button/Button";

const AddCitiesForm = ({onFormSubmit}) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        onFormSubmit({name})
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <h1>Adding a city</h1>
            <label>
                <span>Adding a city</span>
                <input
                    type="text"
                    value={name}
                    placeholder="City"
                    onChange={handleChange}
                    required
                />
            </label>

            <Button type="submit">Add</Button>
        </form>
    )
}

AddCitiesForm.propTypes = { onFormSubmit: PropTypes.func }


export default AddCitiesForm