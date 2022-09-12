import React from 'react';
import ReactDOM  from "react-dom";
import "./style.css";
import Form from './Form';
import Navbar from './Navbar';





class App extends React.Component{
   
    state={
        fields:{}
    };
    
    
    onSubmit=(fields)=>{
        this.setState({fields});
};

    render(){
        return (
            <div> 
                <Navbar/>
                <Form onSubmit={fields=>this.onSubmit(fields)}/>
                
            </div>



        )





    }
};

export default App;

