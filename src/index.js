//1.Import Area

import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

//2.Class Defination Area
//Every component can have its own data
class A extends Component{
    //1.Properties/Variable
    state;


    //2.Constructor
    constructor(){
        super();
        this.state = {
                        name:"Rohit",
                        surname:"Sharma",
                        address:"Neemuch"
                     }


                     
    }


    //3.Methods
    render(){
        this.setState({
            ...this.state,  //... is a spread operator
            name:"Minakshi"
        });
        return       <>
                    <h1>GAUTAM {this.state.name} {this.state.surname} {this.state.address} </h1>;
                    <h1>GAUTAM {this.state.address} </h1>;
                    <h1>GAUTAM {this.props.name} {this.props.surname} {this.props.children}</h1>;
                    <h1>GAUTAM {this.props.name} {this.props.children}</h1>;
                </>
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Virat" surname="Kohli">Delhi</A>);


//3.Export Area
