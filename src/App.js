import React, { Component } from 'react';
import './App.css';
import List from './List';
import Form from './TobuyForm';


class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Eggs", complete: false},
      { id: 2, name: "Milk", complete: false},
      { id: 3, name: "Bananas", complete: false},
    ]
  }

  // renderTobuy= () => {
  //   const {groceries} = this.state;
  //   return groceries.map( grocery => 
  //     <li key={grocery.id}>{grocery.name}</li>
  //   )
  // }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqId(), complete: false };
    this.setState({ groceries: [grocery, ...groceries] })
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  render() {
    const { groceries } = this.state;
    return (
      <div>
        <h1> Grocery List </h1>
        {/* <h2> Things to Buy</h2> */}
        <List name ="Things to Buy" items={groceries} todoClick={this.handleClick}/>
        <Form addItem = {this.addItem}/>
      
      </div>
    );
  }
}

export default App;
