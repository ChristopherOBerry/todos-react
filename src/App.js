import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoVal) {
    if (todoVal !== "") {
      const newItem = {
        id: Date.now(),
        value: todoVal,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex">
          <div className="col-12">
            <h1 className="app-title">App Level</h1>
          </div>
          <div className="col-12">
            Add a task
            <input
              type="text"
              className="input-text"
              placeholder="Write a task"
              required
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}
            ></input>
            <button
              className="add-btn btn-primary btn-sm m-1"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
            >
              Add
            </button>
            <div className="col-12">
              <h4>Here is a list of the Todos:</h4>
            </div>
            <div className="list">
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li className="border border-secondary" key={item.id}>
                      <input
                        className="m-1"
                        type="checkbox"
                        name="idDone"
                        checked={item.isDone}
                        onChange={() => {}}
                      />
                      {item.value}
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
                <li>
                  <input className="m-1" type="checkbox" name="" id="" />
                  Doin' thangs
                  <button className="btn-sm btn-primary m-1">Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
