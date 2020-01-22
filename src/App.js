import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Dishes from './containers/Dishes/Dishes';
import NewDish from './components/NewDish/NewDish';
import Orders from './containers/Orders/Orders';

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dishes} />
        <Route path="/dishes/:id/edit" exact component={NewDish}/>
        <Route path="/dishes" component={Dishes} />
        <Route path="/add-dish" exact component={NewDish}/>
        <Route path="/orders" exact component={Orders}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Layout>
);

export default App;
