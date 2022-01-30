import React, { useEffect, useState } from "react";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectCount } from "../features/user/userSlice";
import { selectRoom, currentroom } from "../features/Rooms/roomSlice";
function Rooms() {
  const [user] = useAuthState(auth);
  const count = useSelector(selectCount);
  const reduxroom = useSelector(selectRoom);
  const [roomNames, setroomNames] = useState([]);
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
          dispatch(setUser(doc.data()));
        });
        console.log(unsub);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      console.log(user.uid);
    }
  };
  const ShowChannels = (data) => {
    console.log("data from show channels", data.data.channelIds, data);
    dispatch(currentroom(data.data));
  };
  useEffect(() => {
    let arr = {};
    setroomNames([]);
    count.userRoomsIds.forEach(async (id) => {
      let data = await getDoc(doc(db, "rooms", id));
      console.log(data.data().RoomName);
      let roomname = data.data();
      setroomNames((state) => [...state, roomname]);
    });
    console.log(arr);
  }, [count]);
  return (
    <div className="flex">
      <button onClick={handelrooms}>add</button>

      <button
        onClick={() => {
          console.log(roomNames);
        }}
      >
        check
      </button>
      {roomNames.map((data) => (
        <>
          <button onClick={() => ShowChannels({ data })}>
            {data.RoomName}
          </button>
        </>
      ))}
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => {
        console.log(reduxroom)
        }}>show redux user</button>
    </div>
  );
}

export default Rooms;
