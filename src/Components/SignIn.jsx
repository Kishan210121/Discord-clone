import React, { useState } from 'react';
import { signInWithEmailAndPassword  } from "firebase/auth";
// import {doc,setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import {auth} from "../firebase"
function Signin() {
    const [email,setemail]=useState("anjalikaran504@gmail.com");
    const [password,setpassword]=useState("8447150120");
    let navigation =useNavigate();
    const handelsignin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigation("/karan")
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);

        });
    }
  return <div>
      <input type="email" value={email} name="" id="" placeholder='enter your email id' onChange={(e)=>setemail(e.target.value)}set/>
        <br />
      <input type="password" value={password} name="" id="" placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={handelsignin}>sign in</button>
  </div>;
}

export default Signin;
