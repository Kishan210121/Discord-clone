import React from 'react';
import Image5 from "../Assests/HomeDiscord_Info_Img4.svg"
import "../Style/style.css"
function Download() {
  return <div className='flex h-screen items-center justify-center'>
      <div className='max-w-screen-xl w-full'>
        <h2 className='font-extrabold text-4xl lg:text-5xl lg:text-center '>Reliable tech for staying close</h2>
        <div className=' mt-4 lg:text-center'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>
        <div className='flex justify-center align-center'>
            <img src={Image5} alt="" />
        </div>
        <div className='flex justify-center align-center'>
            <h4 className='font-extrabold text-4xl '>Ready to start your journey?</h4>
        </div>
        <button className='HomelastButton rounded-full py-24 block m-auto'>Download for window</button>
      </div>
  </div>;
}

export default Download;
