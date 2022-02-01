import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectRoom, currentroom } from "../features/Rooms/roomSlice";
import { db } from "../firebase";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
function Channel() {
  const [room] = useSelector(selectRoom);
  let someid = room;
  if (someid == undefined || someid == null) {
    someid = "1234";
  }
  const [value] = useCollection(
    collection(db, "Globel-Channels", someid, "Channels"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const addchannel = async () => {
    const promptname = prompt("What the name of your chanel?");
    console.log("add channel", room.RoomId);
    const docref = await addDoc(
      collection(db, "Globel-Channels", room.RoomId, "Channels"),
      {
        ChannelName: promptname,
        ChannelId: "",
      }
    );
    handeUpdate(docref.id);
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
  return (
    <>
      <div>
        <button onClick={addchannel}>
          <PlusIcon className="h-5" />
        </button>
        {value &&
          value.docs.map((doc) => (
            <div
              className="roomDiv m-1"
              // onClick={() => setCurrentRoom(doc.data())}
            >
              {" "}
              {doc.data().ChannelName}
            </div>
          ))}
      </div>
    </>
  );
}

export default Channel;
