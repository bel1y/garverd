import React, {useEffect, useState} from 'react'
import './loginpost.css'
import axios from 'axios'

export default function Podpis1() {
    const[state,setState]=useState(sessionStorage.getItem('token'))
    function postModal(){
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
    


  return (
 <div className='from'> 
        <form action="">
            <label htmlFor=""></label><br />
            <input placeholder='email or username' type="text" id='email'/><br />
            <label htmlFor=""></label><br />
            <input type="password" placeholder='password'  name="" id="pass" /><br />
            <button onClick={()=>postModal()} type='button'>Click me</button>
        </form>
 </div>
  )
}
