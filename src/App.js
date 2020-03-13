import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';
import ItemList from './ItemList';
import DeleteItem from './DeleteItem';

class App extends React.Component {
  state = {
    items: []
  };

  handleAddItem = item =>
    this.setState(prevState => ({ items: [...prevState.items, item] }));

  handleDeleteItem = event => 
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItems = () => this.state.items.length === 0;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem onAddItem={this.handleAddItem} />
        <DeleteItem onDelete={this.handleDeleteItem} isButtonDisabled={this.noItems()} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
