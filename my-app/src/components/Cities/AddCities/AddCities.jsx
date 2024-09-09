import { Component } from "react";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";

export default class AddCities extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };

  state = {
    name: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Adding a City</h1>
        <label>
          <span>City</span>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            placeholder="City"
            required
          />
        </label>
        <Button type="submit">Add City</Button>
      </form>
    );
  }
}
