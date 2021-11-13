import React, { Component } from "react";
import "../../css/bootstrap.min.css";
export default class Card extends Component {
  render() {
    return (
      <div className='card container border border-secondary w-50'>
        <div className='card-header bg-light text-primary mt-2'>
          {this.props.nama}
        </div>
        <div className='card-body'>{this.props.children}</div>
      </div>
    );
  }
}