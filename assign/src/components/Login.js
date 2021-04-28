import React, { Component } from 'react'
import Image2 from '../images/Image2.webp'

export default class Login extends Component {

  constructor(){
    super()
    this.state={
        username:"",
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
  fetch(' http://127.0.0.1:8000/api/login/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.state)
    })
    .then(res=> res.json())
    .then((result)=>{
     
      console.log(result)
      localStorage.setItem('id',result.id)
        
    },
      (error) => {
          this.setState({
          error,
        
          });
        }
    ).then(this.props.history.push({pathname:"/details" }))
}

    render() {
        return (
            <div>
                
    <section>
    <div className="container">
      <div className="user signinBx">
        <div className="imgBx"><img  src={Image2} alt="" /></div>
        <div className="formBx">
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <input type="text" name="username" value={this.state.username} placeholder="Username"  onChange={this.handleChange} />
            <input type="password" name="password" value={this.state.password} placeholder="Password"  onChange={this.handleChange} />
            <input type="submit" name="" value="Login" />
            <p className="signup">
              Don't have an account ?
              <a href="/" >Register.</a>
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
