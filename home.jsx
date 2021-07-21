import React, { Component } from 'react';
// const axios = require ('axios')
import axios from 'axios'

class home extends Component {

     state = {

        posts : []
     }

     componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{

            this.setState({posts: response.data})
        })
        .catch(function(error){

            console.log(error);
        })
     }

   

    render() {

        const posts = this.state.posts;

        const allPosts = posts.map((post, ind) =>{

            return (

                <div>
                   
                    <span>{post.userId}</span>
                    <a href='' key={ind}>{post.title}</a><br></br><br></br>

                    <p key={ind}>{post.body}</p>
                
                </div>
            )

        });
       
        
        return (
            <div>
                <h1>Hi i am form home class Component</h1>
                 

            <div class="media"> 
                <div class="media-body ">
                    {allPosts}
                </div>
                </div>

            </div>
        );
    }
}

export default home;
  
