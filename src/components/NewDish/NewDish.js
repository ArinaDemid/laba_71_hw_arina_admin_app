import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {connect} from "react-redux";
import {addDishToFRB, valueChange, changeDishFromFRB} from '../../store/actions/dishes';
import {NavLink} from 'react-router-dom';

class NewDish extends Component {

  render() {
    const dish = this.props.dish;
    let buttonForm = null;
    let title = null;
    if (this.props.match.params.id) {
      buttonForm = <Button type="submit" onClick={() => this.props.changeDish(this.props.match.params.id, dish)} style={{border: 'none', padding: '0 0'}}>
                      <NavLink to="/" style={{backgroundColor: 'rgb(86, 22, 146)', color: 'white', padding: '15px 20px', textDecoration: 'none'}} >Change dish</NavLink>
                  </Button>;
      title = <h2 className="NewDish_title">Change the dish</h2>;
    } else {
      buttonForm = <Button type="submit" onClick={(event) => this.props.submitDish(event, dish)} style={{border: 'none', padding: '0 0'}}>
                      <NavLink to="/" style={{backgroundColor: 'rgb(86, 22, 146)', color: 'white', padding: '15px 20px', textDecoration: 'none'}} >Save</NavLink>
                    </Button> ;
      title = <h2 className="NewDish_title">Edit new dish</h2>;
    }
    return (
      <div className="NewDish_block">
        {title}
          <Form className="NewDish_form"  >
            <FormGroup>
              <Label for="title">Title</Label>
                <Input required type="text" name="title" id="title" 
                  onChange={(event) => this.props.valueChange(event.target.name, event.target.value)} 
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 NewDish_group">
              <Label for="price">Price</Label>
              <Input required type="text" name="price" id="price" 
                onChange={(event) => this.props.valueChange(event.target.name, event.target.value)}
              />
            </FormGroup>
            <FormGroup className="NewDish_group">
              <Label for="image">Image</Label>
              <Input type="text" name="image" id="image" onChange={(event) => this.props.valueChange(event.target.name, event.target.value)}/>
            </FormGroup>
            {buttonForm}
          </Form>
        </div>
    )
  }
};

const mapStateToProps= state => {
  return {
    dish: state.dishes.dish
  };
};


const mapDispatchToProps = dispatch => {
  return {
    submitDish: (dish, event) => dispatch(addDishToFRB(dish, event)),
    valueChange: (name, value) => dispatch(valueChange(name, value)),
    changeDish: (dishID, changeDish) => dispatch(changeDishFromFRB(dishID, changeDish)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDish);