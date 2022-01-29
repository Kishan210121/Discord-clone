import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectCount } from "../features/user/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
// import { increment, decrement,selectCount } from "../features/user/userSlice.js"
function Signup() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [email, setemail] = useState("raikaran159@gmail.com");
  const [password, setpassword] = useState("8447150120");
  const [name, setName] = useState("karan");
  const handelsignup = () => {
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let obj = {
          Name: name,
          emailId: user.email,
          userId: user.uid,
          userRoomsIds: [],
          OtherRoomIds: [],
        };
        dispatch(setUser(obj));
        AddUserInFirebase(user, obj);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, "nahi hua");
      });
  };
  const AddUserInFirebase = async (user, data) => {
    await setDoc(doc(db, "users", user.uid), data);
  };
  return (
    <div>
      <input
        type="email"
        value={email}
        name=""
        id=""
        placeholder="enter your email id"
        onChange={(e) => setemail(e.target.value)}
        set
      />
      <br />
      <input
        type="text"
        value={name}
        name=""
        id=""
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
        set
      />
      <input
        type="password"
        value={password}
        name=""
        id=""
        placeholder="enter your password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handelsignup}>sign up</button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log(count);
        }}
      >
        show me{" "}
      </button>
    </div>
  );
}

export default Signup;
