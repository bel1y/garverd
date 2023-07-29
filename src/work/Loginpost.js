import React, {Component} from 'react'
import './loginpost.css'
import axios from 'axios'
import {FiEdit} from 'react-icons/fi'
import {MdDeleteOutline} from 'react-icons/md'


export default class App extends Component {
    state={
        data:[],
        login:sessionStorage.getItem('token'),
        deleteid:{},
}

  postModal=()=>{
    var data= new FormData()

    data.append("email", document.querySelector('#email').value)
    data.append("user_password", document.querySelector('#pass').value)
    data.append("username", document.querySelector('#email').value)



    axios.post("https://markaz-yhlk.onrender.com/auth/login", data).then(res=>{
        console.log(res.data);
        sessionStorage.setItem('token', res.data.access)
        window.location.reload()
    }).catch(err=>{
        alert("error")
    })
}

getModal(){
    console.log(sessionStorage.getItem('token'));
    axios.get('https://markaz-yhlk.onrender.com/auth/users', {headers:{Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
    .then(res=>{
        this.setState({data:res.data})
    }).catch(err=>{
        alert('tupoy')
    })

}

componentDidMount(){
    if (this.state.login) {
        this.getModal()
    }
}




render() {
    return (
      <div>
        {this.state.login?(<div>
            {this.state.data.map(item=>{
            return( <table>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    
                </tr>
                <tr>
                    <td>{item.user_id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td><FiEdit/> Edit</td>
                    <td><MdDeleteOutline/> Delete</td>
                </tr>
            </table>)
            
            })}
            
        </div>):(
       <div className='from'> 
        <form action="">
            <label htmlFor=""></label><br />
            <input placeholder='email or username' type="text" id='email'/><br />
            <label htmlFor=""></label><br />
            <input type="password" placeholder='password'  name="" id="pass" /><br />
            <button onClick={()=>{this.postModal()}} type='button'>Click me</button>
        </form>
 </div>)}

  
      </div>
    )
  }
}