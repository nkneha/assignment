import React, { Component } from 'react'

export default class Category extends Component {

  constructor(){
    super()
    this.state={
     user:parseInt(localStorage.getItem('id')),
     role:"",
     
    }
  
 
}


  handleChange=(e)=>{
    this.setState({
        role: e.target.value
       
    })
    console.log(e.target.value);
    
  }


  handleSubmit=(e)=>{
    e.preventDefault()
    fetch("http://127.0.0.1:8000/profile/",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(this.state)
      })
      .then(res=> res.json())
      .then((result)=>{
       
        console.log("xcnj,m")
          
      },
        (error) => {
            this.setState({
            error,
          
            });
          }
      )
  }
 
    render() {
        return (
            <div>
    <section>
    <div className="container">
      <div className="user signinBx">
        {/* <div className="imgBx"><img  src="" alt="" /></div> */}
        <div className="formBx">
          <form onSubmit={this.handleSubmit}>
            <h2>Select Category:</h2>
            <select  name="selectValue" value={this.state.role}  onChange={this.handleChange} >
       <option  value="customer">Customer</option>
        <option  value="worker">Worker</option>
      
      </select><br/>
      <input type="submit" name="" value="Next"/>
          </form>
        </div>
      </div>
     
    </div>
  </section>
            </div>
        )
    }
}
