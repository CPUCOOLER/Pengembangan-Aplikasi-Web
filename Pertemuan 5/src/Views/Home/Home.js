import React from "react";
import Card from "../../components/card/card";
import Input from "../../components/input/input";
import Header from "../../components/Header/Header";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      status: "",
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <Input
            getValues={(name, value) => this.setState({ [name]: value })}
          />
          <Card nama={this.state.nama}>
            <p>{this.state.status}</p>
          </Card>
        </div>
      </div>
    );
  }
  // render(){
  //     return(
  //         <div>
  //             <h2>Title Home Component</h2>
  //             <p>Hello my name is {this.props.name}</p>
  //         </div>
  //     );
  // }
}