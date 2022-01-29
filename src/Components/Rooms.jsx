import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, updateDoc } from "firebase/firestore"; 
function Rooms() {
  const [user]=useAuthState(auth);
  const handelrooms=async ()=>{
    const roomname=prompt("enter the name of your room")
    if(user && roomname){
      try {
        const docRef = await addDoc(collection(db, "rooms"), {
          ownerId: user.uid,
          RoomName: "Lovelace",
          born: 1815
        });
        await updateDoc(doc(db, "users", user.uid), {
          userRoomsIds: [docRef.id],
        });        
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      console.log(user.uid)
    } 
  }
  return <div className='flex'>
    <button onClick={handelrooms}>add</button>
  </div>;
}

export default Rooms;
