import React, { Component } from "react";
import { connect } from "react-redux";
import additems  from "../actionTypes/types";

class TodoList extends Component {
  state = { myinput: "" };

  handelChange = (e) => {
    this.setState({ myinput: e.target.value });
  };

  handeladd = () => {
    this.props.additems ({
      text: this.state.myinput,
      id: Math.random()
    });
  };
  render() {
    return (
      <div className="container card card-body  ">
        <h1> To-do</h1>
        <div className="d-flex m-4">
          <input
            className="form form-control m-2 "
            onChange={this.handelChange}
            value={this.state.myinput}
            type="text"
            placeholder="add your todo "
          />
          <button className="btn btn-primary" onClick={this.handeladd}>
          
            Add
          </button>
        </div>
        <ul>
          {()=>this.props.todos.map((e) => {
            return (
              <div>
                <li
                  className="form form-control form-group "
                  key={Math.random()}
                >
                  {e.todo}
                </li>
                <div>
                  <button className="btn btn-danger m-2"> delet </button>
                  <button className="btn btn-success m-2"> complited </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return { todos: state }
}



const mapDispatchToProps = (dispatch) => {
  return { additems: (payload) => dispatch(additems(payload))

};


export defualt  connect (mapStateToProps, mapdDispatchToProps) (TodoList)