import { Component } from "react";
import AddCities from "./AddCities/AddCities";
import Button from "../common/Button/Button";

export default class Cities extends Component {
  state = {
    isAddFormVisible: false,
    list: [],
  };

  renderList(list) {
    if (!list || list.length === 0) {
      return <div>There are no cities yet</div>;
    }

    return list.map((item) => (
      <div className="styles.card" key={item.id}>
        <span>{item.name}</span>
      </div>
    ));
  }

  handleAddItem = (item) => {
    const newId = this.state.length > 0 ? this.state.length + 1 : 0;

    const itemToAdd = {
      id: newId,
      name: item.name,
    };

    this.setState((prevState) => {
      return {
        list: [...prevState.list, itemToAdd],
        isAddFormVisible: false,
      };
    });
  };
  render() {
    const { isAddFormVisible, list } = this.state;
    return (
      <div>
        <div>{this.renderList(list)}</div>
        {isAddFormVisible && <AddCities onFormSubmit={this.handleAddItem} />}
        <Button
          action={() => {
            this.setState({ isAddFormVisible: true });
          }}
        >
          Add City
        </Button>
      </div>
    );
  }
}
