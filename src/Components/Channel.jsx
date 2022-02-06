import React from "react";
import { PlusIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectRoom, currentroom } from "../features/Rooms/roomSlice";
import { db } from "../firebase";
import { collection, addDoc, getDoc, doc, updateDoc,getDocs } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {CurrentChannel} from "../features/Rooms/ChannelSlice"
function Channel() {
  const dispatch =useDispatch();
  let room = useSelector(selectRoom);
  const [value] = useCollection(
    collection(db, "Globel-Channels", room.RoomId, "Channels"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const addchannel = async () => {
    const promptname = prompt("What the name of your chanel?");
    console.log("add channel", room.RoomId);
    if(promptname){
        const docref = await addDoc(
          collection(db, "Globel-Channels", room.RoomId, "Channels"),
          {
            ChannelName: promptname,
            ChannelId: "",
          }
          );
          handeUpdate(docref.id);
      }
  };
  const handeUpdate = async (id) => {
    console.log("update call hua", id);
    let data = await updateDoc(
      doc(db, "Globel-Channels", room.RoomId, "Channels", id),
      {
        ChannelId: id,
      }
    );
    console.log("this is I am trying to get", data);
  };
  useEffect(()=>{
    handelcurrentchannel();
  },[room]);
  const handelcurrentchannel=async()=>{
    console.log("function channel is calling",room.RoomId)
    const document=await getDocs(collection(db, "Globel-Channels", room.RoomId, "Channels"));
    const obj=document.docs[0].data();
    dispatch(CurrentChannel(obj));
  }
  return (
    <>
      <div className="h-full w-full">
        {
          room && (
            <>
              <div className="flex justify-center px-8">
                <div className='flex items-center'><ChevronRightIcon className='h-5 inline ' />#Text Channels {
                  room.RoomId !=="12345" && (
                    <button onClick={addchannel}>
                      <PlusIcon className="h-5" />
                    </button>
                  )
                } </div>
              </div>
              {
                room.RoomId ==="12345" && (
                  <div><h1>welcome to chat section </h1></div>
                )
              }
              {value &&
                value.docs.map((doc) => (
                  <div
                    className="py-2 px-2 bg-stone-600 font-bold rounded-xl my-2"
                  onClick={() => console.log(doc.data())}
                  >
                    {" "}
                    {doc.data().ChannelName}
                  </div>
                ))}
              <button onClick={() => {
                console.log(room)
              }}>check only</button>
            </>
          )
        }
      </div>
    </>
  );
}

export default Channel;
