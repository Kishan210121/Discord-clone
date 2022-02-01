import React, { useEffect, useState } from "react";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectCount } from "../features/user/userSlice";
import { selectRoom, currentroom } from "../features/Rooms/roomSlice";
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
  // useEffect(() => {
  //   let arr = {};
  //   setroomNames([]);
  //   count.userRoomsIds.forEach(async (id) => {
  //     let data = await getDoc(doc(db, "rooms", id));
  //     console.log(data.data().RoomName);
  //     let roomname = data.data();
  //     setroomNames((state) => [...state, roomname]);
  //   });
  //   console.log(arr);
  // }, [count]);
  return (
    <div className="flex flex-col">
      <button onClick={handelrooms}>add</button>

      <button
        onClick={() => {
          console.log(roomNames);
        }}
      >
        check
      </button>
      {value &&
        value.docs.map((doc) => (
          <div
            className="roomDiv m-1"
            onClick={() => setCurrentRoom(doc.data())}
          >
            {" "}
            {doc.data().RoomName}
          </div>
        ))}
      <br />
      <br />
      <br />
      <br />
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
