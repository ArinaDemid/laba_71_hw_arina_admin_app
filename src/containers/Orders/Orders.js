import React, {Component, Fragment} from 'react';
import Order from '../../components/Order/Order';
import {connect} from "react-redux";
import {getOrders, deleteOrder} from '../../store/actions/order';
import {fetchDishes} from '../../store/actions/dishes';
import Spinner from '../../components/UI/Spinner/Spinner';
import {NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';

class Orders extends Component{

  componentDidMount() {
    this.props.getOrders();
    this.props.fetchDishes();
  }
  render() {

    let dishesName= [];
    // eslint-disable-next-line
    Object.keys(this.props.dishes).map(id => {
      dishesName.push({name: this.props.dishes[id].title, id: id, price: this.props.dishes[id].price})
    });

    const stateOrders = this.props.orders;
    let orders = null;
    if(!dishesName) {
      orders = <Spinner />
    }

    if (stateOrders && dishesName.length > 0) {
      orders = (
        <div>
        {Object.keys(stateOrders).map(id => (
          <div key={id} style={{border: '1px solid grey', marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{marginRight: '20px'}}>
              {Object.keys(stateOrders[id]).map(key => (
                <div className='Dish' key={key} style={{alignItems: 'flex-start'}}>
                  <Order
                    count={stateOrders[id][key]}
                    price={dishesName[dishesName.findIndex(p => p.id === key)].price}
                    name={dishesName[dishesName.findIndex(p => p.id === key)].name}
                    >
                  </Order>
                </div>
              ))}
              <p style={{fontSize: '22px', paddingLeft: '20px'}}>Delivery <span style={{fontSize: '17px', paddingLeft: '80px'}}>150 KGS</span></p>
            </div>
            <div style={{marginTop: '10px'}}>
              <p>Order total: </p>
              <p style={{fontWeight: 'bold'}}>{Object.keys(stateOrders[id])
                .map(orderKey => stateOrders[id][orderKey] * dishesName[dishesName.findIndex(p => p.id === orderKey)].price)
                .reduce((sum, el) => (sum + el), 0) + 150}  KGS</p>
              <Button type="submit" onClick={() => this.props.deleteOrder(id)} style={{border: 'none', padding: '0 0', background: 'transparent'}}>
                <NavLink to="/orders" style={{padding: '5px 40px 0 0', textDecoration: 'none'}} >Complete order</NavLink>
              </Button>
            </div>
          </div>
        ))}
        </div>
      );
    }
    
    return (
      !this.props.spinner ? 
      <Fragment>
        <h3>Orders</h3>
        <div className='Orders' style={{marginTop: '20px'}}>
          {orders}
        </div>
      </Fragment>
      : <Spinner />
    );
  }
}

const mapStateToProps= state => {
  return {
    orders: state.orders.orders,
    spinner: state.orders.spinner,
    dishes: state.dishes.dishes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: (orderID) => dispatch(deleteOrder(orderID)),
    getOrders: () => dispatch(getOrders()),
    fetchDishes: () => dispatch(fetchDishes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);