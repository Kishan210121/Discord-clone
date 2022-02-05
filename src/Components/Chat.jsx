import React,{useState} from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../firebase"
// import {CurrentChannel} from "../app/store"
import { useSelector, useDispatch } from "react-redux";
import { selectChannel } from '../features/Rooms/ChannelSlice';
import {selectCount} from "../features/user/userSlice"
function Chat() {
  // Add a new document with a generated id.
  const [meaasge,setmessage]=useState("");
  const CurrentChannels =useSelector(selectChannel)
  const user=useSelector(selectCount);
  const handelsend=async()=>{
    console.log(meaasge);
    console.log(CurrentChannels);
    const docRef = await addDoc(collection(db, "Messages",CurrentChannels.ChannelId,"users-messages"), {
      userName: user.Name,
      userId: user.userId,
      Message:meaasge
    });
    console.log("Document written with ID: ", docRef.id);
  }
  return <div className='flexteight'>this is chat room
   <input type="text" placeholder='enter a message' onChange={(e)=>setmessage(e.target.value)}/>
   <button onClick={handelsend}>send</button>
  </div>;
}

export default Chat;
