import React, { Component } from 'react'


export default class Profile extends Component {
  constructor(){
    super()
    this.state={
       username:localStorage.getItem('id')
    }
 
}

    componentDidMount(){
        fetch("http://127.0.0.1:8000/getdetail/",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"username":this.state.username})
          })
          .then(res=> res.json())
          .then((result)=>{
           
            this.setState({address:result.address,})
           console.log(result.address)
              
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
        <div className="formBx">
          <form onSubmit="">
            <h2>Profile</h2>
            {this.state.address}
          </form>
        </div>
      </div>
     
    </div>
  </section>

                
            </div>
        )
    }
}
