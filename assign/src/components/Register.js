import React, { Component } from 'react'
import Image1 from '../images/Image1.jpg'


export default class Register extends Component {

    constructor(){
        super()
        this.state={
            username:"",
            email:"",
            password:"",
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
          })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        fetch(' http://127.0.0.1:8000/api/register/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
          })
          .then(res=> res.json())
         
          .then((result)=>{
            localStorage.setItem('id',result.id)
            console.log(result.id)
              
          },
            (error) => {
                this.setState({
                error,
              
                });
              }
          ) .then(this.props.history.push({pathname:"/category" }))
    }

    render() {
        return (
            <div>
                 <section>
    <div className="container">
      <div className="user signinBx">
        <div className="imgBx"><img  src={Image1} alt="" /></div>
        <div className="formBx">
          <form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="username" value={this.state.username} placeholder="Username"  onChange={this.handleChange} />
            <input type="email" name="email" value={this.state.email} placeholder="Email"  onChange={this.handleChange}/>
            <input type="password" name="password" value={this.state.password} placeholder="Password"  onChange={this.handleChange}/>
            <input type="submit" name="" value="Register" />
            <p className="signup">
              Already have an account ?
              <a href="/login" >Sign In.</a>
            </p>
          </form>
        </div>
      </div>
     
    </div>
  </section>
            </div>
        )
    }
}
