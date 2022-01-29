import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Slidbar from "./Slidbar";
import Chat from "./Chat";
// import { useNavigate } from "react-router-dom";
// import React, { useEffect,useState } from "react";
// import {db} from "../firebase"
import { auth } from "../firebase";

function Home() {
  // const [myloading, setloading] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  // let navigate = useNavigate();
  let myloading=false;
  if (loading) {
    console.log("loading is in progress", loading);
  }
  if (error) {
    console.log("error while getting usser", error);
  }
  if (user) {
    console.log("this is my user", user);
  }
  
  return (
    <div className="flex h-screen w-screen">
      {myloading ? (
        <>loading</>
      ) : (
        <>
          <Slidbar />
          <Chat />
        </>
      )}
    </div>
  );
}

export default Home;
