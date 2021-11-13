import react from 'react';

export default class Home extends react.Component{

    render(){
        return(
            <div>
                <h2>Title Home Component</h2>
                <p> Hello my name is  {this.props.name}</p>
                <button onClick={()=> this.setState({name : "Tyrion Lannister"})}>Ubah Nama</button>
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