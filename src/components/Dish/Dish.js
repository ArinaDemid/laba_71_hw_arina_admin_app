import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import './Dish.css';

class Dish extends Component {
  render() {
    let buttonsBlock = null;
    buttonsBlock = (
      <div>
        <button className="addToCart" color="link"
          onClick={() => this.props.delete(this.props.id)} >
          <i className="fas fa-trash-alt" style={{fontSize: '20px'}}></i>
          Delete
        </button>
        <NavLink className="addToCart" to={'/dishes/' + this.props.id + '/edit'} >
          <i className="fas fa-edit" style={{fontSize: '20px'}}></i>
          Edit
        </NavLink>
      </div>
    );
    return (
      <div className="Dish_block">
        <img src={this.props.image} alt="dish" style={{width: '40%', padding: '5px'}}/>
        <div className="Dish_info">
          <h4 style={{textTransform: "capitalize"}}>{this.props.name}</h4>
          <p>KGS {this.props.price}</p>
        </div>
        {buttonsBlock}
      </div>
    )
  }
};

export default Dish;