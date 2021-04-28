import React, { Component } from 'react'

export default class Detials extends Component {
   
    constructor(){
        super()
        this.state={
           username:parseInt(localStorage.getItem('id')) ,
           contact:"",
           address:"",
           city:"",
           pincode:"",
        }
     
    }
    
    handleChange=(e)=>{
      this.setState({
          [e.target.name]: e.target.value
         
      })
      
    }
   

    handleSubmit=(e)=>{
      e.preventDefault()
      fetch("http://127.0.0.1:8000/details/",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(this.state)
        })
        .then(res=> res.json())
        .then((result)=>{
         
         console.log(result)
            
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
          <a href="/profile">Profile</a>
          <form onSubmit={this.handleSubmit}>
            <h2>Additional Information</h2>
            {/* <input type="text" name="username" value={this.state.username} placeholder="Username"  onChange={this.handleChange} /> */}
            <input type="number" name="contact" value={this.state.contact} placeholder="Contact Number"  onChange={this.handleChange} />
            <input type="text" name="address" value={this.state.address} placeholder="Address"  onChange={this.handleChange} />
            <input type="text" name="city" value={this.state.city} placeholder="City"  onChange={this.handleChange} />
            <input type="number" name="pincode" value={this.state.pincode} placeholder="Pincode"  onChange={this.handleChange} /> 
            <input type="submit" name="" value="Submit"/>
           
          </form>
        </div>
      </div>
     
    </div>
  </section> 
            </div>
        )
    }
}
