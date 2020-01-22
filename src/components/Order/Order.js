import React, {Component} from "react";

class Order extends Component {
  render() {
    return (
      <div className="OrderInfo" >
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{padding: '3px 0 0 20px'}}>{this.props.count} x </p>
          <h4 style={{textTransform: "capitalize", padding: '0 20px'}}>{this.props.name}</h4>
          <p style={{paddingTop: '3px'}}>{this.props.price} KGS</p>
        </div>
      </div>
    )
  }
};

export default Order;