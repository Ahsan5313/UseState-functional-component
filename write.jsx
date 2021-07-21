import React, { Component } from 'react';
import axios from 'axios';







class write extends Component {

  state = {

   
    title : '',
    body : ''
    
  }

  formSubmit = (e) =>{

    e.preventDefault()
    
    

    axios.post('/user', {
        title: this.state.title,        
        body: this.state.body
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  }

    render() {


        return (
            <div>
                
                <div className='row container col-lg-4'>

                <form onSubmit={this.formSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="title" required onChange = {event => {this.setState({title:event.target.value})}}/>
                   
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Details </label>
                    <textarea className='form-control' name='body' onChange={event => {this.setState({body:event.target.value})}}>Write here</textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                </div>
                
            </div>
        );
    }
}

export default write;

