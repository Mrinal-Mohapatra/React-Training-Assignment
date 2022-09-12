import React from 'react';
import { useState } from 'react';
import Table from './Table';


export default class Form extends React.Component {
  constructor(){
  super();
  this.state = {
    fullName: "",
    email: "",
    phone: "",
    gender:"Male",
    marry:"True ",
    
    list:[]
  
  
  };

  }
    onSubmit = e => {
      e.preventDefault();
      let list=[...this.state.list];
      list.push({
        fullName:this.state.fullName,
        email:this.state.email,
        phone:this.state.phone,
        gender:this.state.gender,
        marry:this.state.marry,
      });
      this.setState({
        list,
        fullName: "",
        email: "",
        phone: "",
        gender:"",
        marry:"",
      });
    };
    change = e => {
      
      this.setState({
        [e.target.name]: e.target.value
      });

    
    
    };

    render() {
      return (<div>
        <form>
          <input
          name="fullName"
          placeholder="Full Name"
          type="text" 
          
          required
          value={this.state.fullName}
          onChange={e=>this.change(e)}
        />
        <br />
        <br/>
        <input
          name="email"
          type="email"
          placeholder="Enter Valid Email"
          
          value={this.state.email}
          required
          onChange={e=>this.change(e)}
          />
        <br />
        <br/>
        <input
          name="phone"
          type="number"  max="10"  min="10"
          required
          placeholder="Please enter exactly 10 digits"
          
          value={this.state.phone}
          onChange={e=>this.change(e)}
        />
        <br />
        <br/>
        <select
          value={this.state.gender}
          onChange={e=>this.change(e)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <br/>
        <input type="checkbox"   onChange={e=>this.change(e)}  /><br/><span>Married</span>
        <br/>
        <button    className="button" onClick={e => this.onSubmit(e)}>ADD</button>
</form>
     
     <Table list={ this.state.list }   />
     </div>
    );
  };
}
    

