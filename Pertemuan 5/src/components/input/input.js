import React, { Component } from "react";
import "./input.css";
import "../../css/bootstrap.min.css";
export default class Input extends Component {
  render() {
    return (
      <div className='input container w-50 border border-secondary mb-3'>
        <input
          className='w-30 d-block mb-2 mt-3'
          type='text'
          name='nama'
          placeholder='Masukkan Nama Anda'
          onChange={(ev) =>
            this.props.getValues(ev.target.name, ev.target.value)
          }
        />
        <input
          className='w-75 d-block mb-2'
          type='text'
          name='status'
          placeholder='Masukkan Status Anda'
          onChange={(ev) =>
            this.props.getValues(ev.target.name, ev.target.value)
          }
        />
      </div>
    );
  }

  //   constructor(props) {
  //     super(props);
  //     this.state = { status: "" };
  //   }
  //   render() {
  //     return (
  //       <div className='input'>
  //         <input
  //           type='text'
  //           name='status'
  //           placeholder='Enter Your Status'
  //           onChange={(ev) => this.setState({ status: ev.target.value })}
  //         />
  //         <p>Your status : {this.state.status}</p>
  //       </div>
  //     );
  //   }
}
