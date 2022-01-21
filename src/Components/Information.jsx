import React from 'react';
// import myimg from "../InformationImd1.svg"
// /workspace/Discord-clone/src/InformationImd1.svg
function Information({infoimg,heading,pera,order}) {
  return <>
    <div className='flex content-center  justify-center '>
        <div className='max-w-screen-xl w-full  flex justify-center h-screen'>
        <div class="grid lg:grid-cols-2 grid-cols-1 w-full h-full">
            <div className={"flex overflow-hidden justify-center items-center "+order}>
                <img className='h-full w-full'  width="92%" height="92%" src={infoimg} alt="karan" />
                </div>
            <div className='bg-red lg:mrl-12 pl-8 text-center lg:text-left grid-center flex flex-col justify-center'>
                <h2 className='font-extrabold lg:text-5xl text-4xl'>{heading}</h2>
                <p className='lg:text-xl lg:mt-12 mt-4 text-xl'>{pera}</p>
            </div>
            </div>
        </div>
    </div>
  </>
  
}

export default Information;
