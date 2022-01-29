import React, { useEffect, useState } from "react";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectCount } from "../features/user/userSlice";
function Rooms() {
  const [user] = useAuthState(auth);
  const count = useSelector(selectCount);
  const [roomNames, setroomNames] = useState([""]);

  const dispatch = useDispatch();
  const handelrooms = async () => {
    const roomname = prompt("enter the name of your room");
    if (user && roomname) {
      try {
        console.log("this is a RoomsID", count.userRoomsIds);
        const docRef = await addDoc(collection(db, "rooms"), {
          ownerId: user.uid,
          RoomName: roomname,
          channelIds: [],
        });
        await updateDoc(doc(db, "users", user.uid), {
          userRoomsIds: [...count.userRoomsIds, docRef.id],
        });
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
          // console.log("Current data: ", doc.data());
          dispatch(setUser(doc.data()));
        });
        console.log(unsub);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      console.log(user.uid);
    }
  };
  useEffect(() => {
    let arr = {};
    count.userRoomsIds.forEach(async (id) => {
      let data = await getDoc(doc(db, "rooms", id));
      console.log(data.data().RoomName);
      let roomname = data.data().RoomName;
      setroomNames((state) => [...state, roomname]);
    });
    console.log(arr);
  }, []);
  return (
    <div className="flex">
      <button onClick={handelrooms}>add</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          console.log(roomNames);
        }}
      >
        check
      </button>
      {
        roomNames.map((idx,name) => (
          <>
            {name}
            {idx}
          </>
        ))
      }
    </div>
  );
}

export default Rooms;
