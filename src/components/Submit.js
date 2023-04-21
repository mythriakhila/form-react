import React,{useState} from "react";

import '../styles/login.css'
const Submit = () =>{
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
        <div className="container">
               <form onSubmit={submitForm}>
                <div > <label>Name :</label>
<input type="text" name="username" value={username} onChange={changeForm}/>  </div>
<div> <label>Email :  </label>
<input type="email" name="email" value={email} onChange={changeForm}/>  </div>
<div> <label>Password :  </label>
<input type="password" name="password" value={password} onChange={changeForm}/>  </div>
<input type="submit" />

</form>


          
            
        </div>
    )
}
export default Submit;