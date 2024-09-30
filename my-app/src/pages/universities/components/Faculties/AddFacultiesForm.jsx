import { useState } from "react"
import Button from "../../../common/components/Button/Button";
import PropTypes from 'prop-types';

const AddFacultiesForm = ({ onFormSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [history, setHistory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({name, description, history})
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        const action = {
            name: setName,
            description: setDescription,
            history: setHistory
        }

        action[name](value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Adding a faculty</h1>
            <label>
                <span>Name</span>
                <input type="text"
                    value={name}
                    name="name"
                    placeholder="Faculty"
                    onChange={handleChange}
                    required />
            </label>
            <label>
                <span>Description</span>
                <input type="text"
                    value={description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    required />
            </label>
            <label>
                <span>History</span>
                <input type="text"
                    value={history}
                    name="history"
                    placeholder="History"
                    onChange={handleChange}
                    required />
            </label>
            <Button className={"mt-16"} type="submit">
                Add
            </Button>
        </form>
    )
}

AddFacultiesForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}

export default AddFacultiesForm