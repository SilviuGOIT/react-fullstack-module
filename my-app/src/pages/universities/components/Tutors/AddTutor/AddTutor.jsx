import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Button from "../../../../common/components/Button/Button";

const AddTutor = (props) => {
    const { onFormSubmit } = props;

    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            surname,
            name: username,
            phone,
            email,
            city
        }
        onFormSubmit(user)
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        const action = {
            surname: setSurname,
            username: setUsername,
            phone: setPhone,
            email: setEmail,
            city: setCity
        }
        action[name](value);
    }

    useEffect(() => {
        console.log('Add tutor a fost modificat')
        return () => {
            console.log('Add tutor a fost sters din DOM')
        }
    }, [])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Add Tutor</h1>
            <label>
                <span>Surname</span>
                <input
                    type="text"
                    value={surname}
                    name="surname"
                    placeholder="Surname"
                    onChange={handleChange}
                    required />
            </label>

            <label>
                <span>Name</span>
                <input
                    type="text"
                    value={username}
                    name="username"
                    placeholder="Name"
                    onChange={handleChange}
                    required />
            </label>

            <label>
                <span>Phone</span>
                <input
                    type="tel"
                    value={phone}
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    required />
            </label>

            <label>
                <span>Email</span>
                <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required />
            </label>

            <label>
                <span>City</span>
                <input
                    type="text"
                    value={city}
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    required />
            </label>

            <Button type="submit">Invite</Button>
        </form>
    )
}

AddTutor.propTypes = {
    onFormSubmit: PropTypes.func,
    testProp: PropTypes.string
}

export default AddTutor;