import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Slidbar from "./Slidbar";
import Chat from "./Chat";
// import { useNavigate } from "react-router-dom";
// import React, { useEffect,useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

function Home() {
  // const [myloading, setloading] = useState(false);
  const [user] = useAuthState(auth);
  // let navigate = useNavigate();
  let myloading = false;
  useEffect(() => {
    console.log("user from home useEffect", user);
  }, [user]);

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
