import React,{useState} from "react";
import { Link } from "react-router-dom";
const Register = () =>{
    const [form,setForm] =useState({
        username:'',
        mobile:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const {username,mobile,email,password,confirmPassword} = form;
    const changeForm = e =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const submitForm = e =>{
        e.preventDefault();
       if(username.length <= 8){
        alert('name used me more than 8 charcacters')
       }
       else if(password !== confirmPassword){
        alert('passwords are not same')

       }
       else{
        console.log(form);
       }
    }
    return(
        <div style={{padding:"1rem",height:"300px",width:"250px",border:"1px solid",marginLeft:"30px"}}>
            
                <form onSubmit={submitForm}>
                <div style={{marginTop:"10px"}} > <label>Name :  </label>
<input style={{marginLeft:"26px"}} type="text" name="username" value={username} onChange={changeForm}/>  </div>
<div style={{marginTop:"10px"}}> <label>Mobile :  </label>
<input style={{marginLeft:"26px"}} type="number" name="mobile" value={mobile} onChange={changeForm}/>  </div>
<div style={{marginTop:"10px"}}> <label>Email :  </label>
<input style={{marginLeft:"26px"}} type="email" name="email" value={email} onChange={changeForm}/>  </div>
<div style={{marginTop:"10px"}}> <label>Password :  </label>
<input style={{marginLeft:"26px"}} type="password" name="password" value={password} onChange={changeForm}/>  </div>
<div style={{marginTop:"10px"}}> <label>ConfirmPassword :  </label>
<input type="password" name="confirmPassword" value={confirmPassword} onChange={changeForm}/>  </div>
<input type="submit" name="submit" />
</form>
<Link to="/Register">
        <button>Submit</button>
      </Link>
            
            
        </div>
    )
}
export default Register;