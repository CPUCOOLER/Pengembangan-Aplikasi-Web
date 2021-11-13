import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import Input from "./Input";
// import Home from "./views/Home/Home";
// import About from "./views/About/About";
// import Help from "./views/Help/Help";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      your_name: "",
      status: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Card>
          <div>
            <Input
              getValues={(name, value) => this.setState({ [name]: value })}
            />
          </div>
        </Card>

        <Card>
          <Card.Header>{this.state.your_name}</Card.Header>
          <Card.Body>
            <p>{this.state.status}</p>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     // initial state view
//     this.state = {
//       view: "home",
//     };
//   }

//   render() {
//     // Functional component View untuk mengatur component yang tampil
//     const View = () => {
//       if (this.state.view === "home") {
//         return <Home name="Eden Hazard" />;
//       } else if (this.state.view === "about") {
//         return <About />;
//       } else if (this.state.view === "help") {
//         return <Help />;
//       }
//     };

//     return (
//       <div>
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#"
//                 onClick={() => this.setState({ view: "home" })}
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#"
//                 onClick={() => this.setState({ view: "about" })}
//               >
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#"
//                 onClick={() => this.setState({ view: "help" })}
//               >
//                 Help
//               </a>
//             </li>
//           </ul>
//         </nav>
//         {/* {Panggil Component View} */}
//         <View />
//       </div>
//     );
//   }
// }

// PROPS
// const Message = (props) => {
//   return <p>Hello {props.name}</p>;
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Message name="Ulrich" />
//         <Home name="Kharlos Davinci" />
//       </div>
//     );
//   }
// }

// CLASS COMPONENTS
// const Message = () => {
//   return "Pesan didalam Component";
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Message />
//         <Home />
//       </div>
//     );
//   }
// }

// FUNCTIONAL COMPONENTS
// const Message = () => {
//   return <p>Hello from message component</p>;
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Message />
//       </div>
//     )
//   }
// }

// FUNCTION
// function sayHello() {
//   return "Hello Wold";
// }

// class App extends Component {
//   bilangHalo() {
//     return "Halo Dunia";
//   }

//   render() {
//     return (
//       <>
//         <p>
//           sayHello : <b>{sayHello()}</b>
//         </p>
//         <p>
//           bilangHalo : <b>{this.bilangHalo()}</b>
//         </p>
//       </>
//     );
//   }
// }