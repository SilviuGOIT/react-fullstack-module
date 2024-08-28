import { Component } from "react";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";

export default class AddTutor extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };

  state = {
    surname: "",
    name: "",
    phone: "",
    email: "",
    city: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { surname, name, phone, email, city } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Add tutor</h1>
        <label>
          <span>Surname</span>
          <input
            type="text"
            name="surname"
            value={surname}
            placeholder="Surname"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
        </label>
        <Button type="submit">Invite</Button>
      </form>
    );
  }
}
