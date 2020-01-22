import React, {Component, Fragment} from 'react';
import Dish from '../../components/Dish/Dish';
import {connect} from "react-redux";
import {fetchDishes, deleteDishFromFRB} from '../../store/actions/dishes';
import Spinner from '../../components/UI/Spinner/Spinner';
import {NavLink} from 'react-router-dom';

class Dishes extends Component{

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const stateDishes = this.props.dishes;
    let dishes = null;
    if (stateDishes) {
      dishes = (
        Object.keys(stateDishes).map(id => (
          <div className='Dish' key={id}>
            <Dish
              id={id}
              name={stateDishes[id].title}
              price={stateDishes[id].price}
              image={stateDishes[id].image}
              delete={this.props.deleteDish}
              >
            </Dish>
          </div>
        ))
      );
    }
    
    return (
      !this.props.spinner ? 
      <Fragment>
        <NavLink to={'/add-dish'} style={{backgroundColor: 'rgb(86, 22, 146)', border: '1px solid black', color: 'white', padding: '10px 20px', textDecoration: 'none'}}>
          <i className="fas fa-plus-square"></i>
          Add New Dish
        </NavLink>
        <div className='DishesApp' style={{marginTop: '20px'}}>
          <div className='Dishes'>
            {dishes}
          </div>
        </div>
      </Fragment>
      : <Spinner />
    );
  }
}

const mapStateToProps= state => {
  return {
    dishes: state.dishes.dishes,
    spinner: state.dishes.spinner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDish: (dishID) => dispatch(deleteDishFromFRB(dishID)),
    fetchDishes: () => dispatch(fetchDishes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);