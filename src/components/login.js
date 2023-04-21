import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../styles/login.css'
const Login = () =>{
    const [form,setForm] =useState({
        username:'',
        
        email:'',
        password:''
    });
    const {username,email,password} = form;
    const changeForm = e =>{
        setForm({...form,[e.target.name]:[ e.target.value]})
    }
    const submitForm = e =>{
        e.preventDefault();
        console.log(form);
    }
    return(
        <div className="container" style={{padding:"1rem"}}>
               <form onSubmit={submitForm}>
                <div style={{marginTop:"10px"}}  > <label>Name :</label>
<input style={{marginLeft:"26px"}} type="text" name="username" value={username} onChange={changeForm}/>  </div>
<div style={{marginTop:"10px"}} > <label>Email :  </label>
<input style={{marginLeft:"26px"}} type="email" name="email" value={email} onChange={changeForm}/>  </div>
<div style={{marginTop:"10px"}} > <label>Password :  </label>
<input type="password" name="password" value={password} onChange={changeForm}/>  </div>
<input style={{marginTop:"15px",marginLeft:"7rem"}}   type="submit" />

</form>

<Link to="/Register">
        <button style={{marginTop:"15px",marginLeft:"7rem"}} >Register</button>
      </Link>
          
            
        </div>
    )
}
export default Login;