import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Dishes</NavigationItem>
    <NavigationItem to="/orders" exact>Orders</NavigationItem>
  </ul>
);

export default NavigationItems;