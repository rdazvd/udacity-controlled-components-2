import React from 'react';
import PropTypes from 'prop-types';

class AddItem extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value }); 
  };

  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter new item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form> 
      </div>
    );
  }
}

AddItem.propTypes = {
  onAddItem: PropTypes.func.isRequired
};

export default AddItem;