import React, { Component } from 'react';

import axios from 'axios';


import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




class contact extends Component {

    state = {

        posts : []
    }

    componentDidMount(){

       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((response) => {

       this.setState({posts:response.data})

       })
       .catch((error)=>{

        console.log(error);
       })
    }


    render() {

       const posts = this.state.posts;

       const allPosts = posts.map((post, ind) =>{

        return (

            <div>
                   <tr><td key={ind}>{post.userId}</td><td key={ind}>{post.title}</td><td key={ind}>{post.body}</td></tr>
            </div>
        )

       })

        return (
            <div>
                
                <h1>Hi i am form contact class Component</h1>

                    <Link to='/write'>Click Me</Link><br></br>

                    <br></br>
                    <br></br>

                  <table style={{border:'1px solid red', width:'100%'}} >
                      <thead >
                          <th><td>UserId</td><td>Title</td><td>Body</td></th>
                      </thead>
                      <tbody>
                          {allPosts}
                      </tbody>
                  </table>

            </div>
        );
    }
}

export default contact;