import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc,setDoc } from "firebase/firestore"; 
import {auth,db} from "../firebase"
function Signup() {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [name,setName]=useState("");
        const handelsignup=()=>{
            console.log(email);
            console.log(password);
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                let obj={
                    Name:name,
                    userId:user.uid,
                    userRoomsIds:[],
                    OtherRoomIds:[],
                }
                AddUserInFirebase(user,obj);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage,"nahi hua")
            });
    }
    const AddUserInFirebase=async(user,data)=>{
      await setDoc(doc(db, "users", user.uid), data);          
    }
  return <div>
      <input type="email" value={email} name="" id="" placeholder='enter your email id' onChange={(e)=>setemail(e.target.value)}set/>
        <br />
      <input type="text" value={name} name="" id="" placeholder='enter your email id' onChange={(e)=>setName(e.target.value)}set/>
      <input type="password" value={password} name="" id="" placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={handelsignup}>sign up</button>
  </div>;
}

export default Signup;
