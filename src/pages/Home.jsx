import React, { Component } from 'react'
import myimg from'./pro.jpg'
export default class Home extends Component{
    render(){
         return(
             <div>
        <h2>
          My profile page</h2>
          <img src={myimg} alt="profile-img"/>
            
         </div>
         )
}
}