import React from 'react';
import { PlusIcon,ChevronRightIcon} from '@heroicons/react/solid'
// import { db } from '../firebase';
// import { collection, addDoc,setDoc,doc  } from "firebase/firestore"; 
import Channel from "./Channel"
import Rooms from './Rooms';
function Slidbar() {
  return <div className='flextwo'>
    <div className='flex'>
    <div className="flextwo rooms-section">
      <Rooms/>
    </div>
     <div className="flexteight h-full w-full flex justify-between items-center">
       <div className="h-screen w-full flex flex-col">
        <div className="flexOne">top</div>
        <div className='w-full   flexteight'>
        <div className='w-full h-full flex bg-gray-500 justify-between items-center'>
              <Channel></Channel>
          </div>
        </div>
        <div className="flexOne">bottom</div>
       </div>
     </div>
    </div>

  </div>;
}

export default Slidbar;
