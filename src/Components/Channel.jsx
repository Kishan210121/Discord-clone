import React from 'react';
import { PlusIcon } from "@heroicons/react/solid";
import { useSelector } from 'react-redux';
import { selectRoom, currentroom } from "../features/Rooms/roomSlice";
function Channel() {
    const room = useSelector(selectRoom);
    const addchannel = async () => {
      // const name = prompt ('What the name of your chanel?');
      // let data={
      //   name:name,
      //   rollno:34
      // }
      console.log("add channel",room)
    };
    return (
      <>
        <div>
          <button onClick={addchannel}>
            <PlusIcon className="h-5" />
          </button>
        </div>
      </>
    );
    
}

export default Channel;
