import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs  } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectCount } from "../features/user/userSlice";
import { selectRoom, currentroom } from "../features/Rooms/roomSlice";
import { PlusIcon, ChevronRightIcon } from "@heroicons/react/solid";
import discordLogo from "../Assests/Discord-Logo.png"
// import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
function Rooms() {
  const [user] = useAuthState(auth);
  const count = useSelector(selectCount);
  const reduxroom = useSelector(selectRoom);
  const [roomNames, setroomNames] = useState([]);
  const [value] = useCollection(
    collection(db, "Globel-rooms", user.uid, "My-rooms"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  // let obj={
  //           ownerId: user.uid,
  //           RoomName: roomname,
  //           RoomId: "",
  // }
  // console.log(value)
      // dispatch(currentroom());

  const dispatch = useDispatch();
  const handelrooms = async () => {
    const roomname = prompt("enter the name of your room");
    if (user && roomname) {
      try {
        console.log("this is a RoomsID", count.userRoomsIds);
        const docRlogef = await addDoc(
          collection(db, "Globel-rooms", user.uid, "My-rooms"),
          {
            ownerId: user.uid,
            RoomName: roomname,
            RoomId: "",
          }
        );
        updaterooms(docRlogef.id);
        // const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        //   dispatch(setUser(doc.data()));
        // });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // console.log(user.uid);
    }
  };
  const updaterooms = async (id) => {
    console.log("update call hua", id);
    let data = await updateDoc(
      doc(db, "Globel-rooms", user.uid, "My-rooms", id),
      {
        RoomId: id,
      }
    );
    console.log("this is I am trying to get", data);
  };
  const ShowChannels = (data) => {};
  const setCurrentRoom = (data) => {
    console.log("data from show channels", data);
    dispatch(currentroom(data));
  };
  useEffect(() => {
    setRoomoOnloading();
   
  }, []);
  const setRoomoOnloading=async()=>{
    console.log("function is calling")
    const document=await getDocs(collection(db, "Globel-rooms", user.uid, "My-rooms"));
    const obj=document.docs[0].data();
    dispatch(setCurrentRoom(obj))
  }
  return (
    <div className="flex flex-col px-2 py-2 align-center" >
      <div
            className="roomDiv mx room-icons my-2 roomHeaderDiv Discord-logo"
          >
            <img src={discordLogo} alt="DH" />
      </div>
      {value &&
        value.docs.map((doc) => (
          <div
            className="roomDiv mx-1 my-2 room-icons "
            onClick={() => setCurrentRoom(doc.data())}
          >
            {" "}
            {doc.data().RoomName.substring(0,2)}
          </div>
        ))}
        <div
            className="roomDiv mx room-icons my-2 roomHeaderDiv"
            onClick={() => handelrooms()}
          >
            <PlusIcon className=" w-8 fill-blue-700 hover:fill-slate-100"/>
          </div>
      <button
        onClick={() => {
          console.log(reduxroom);
        }}
      >
        show redux user
      </button>
    </div>
  );
}

export default Rooms;
