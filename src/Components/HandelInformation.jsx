import React from "react";
import Information from "./Information";
// import info1Image from "../DiscordHeaderLeft.svg"
import myimg from "../InformationImd1.svg"
import HomeImg2 from "../Assests/HomeDiscord_Info_Img2.svg"
import HomeImg3 from "../Assests/HomeInformationImd2.svg"
import Download from "./Download";
// /workspace/Discord-clone/src/Assests/HomeInformationImd1.svg
// /workspace/Discord-clone/src/Assests/HomeDiscord_Info_Img2.svg
// /workspace/Discord-clone/src/DiscordHeaderLeft.svg
function HandelInformation() {
   
  return <div>
      <Information order="order-0" infoimg={myimg} heading="Create an invite-only place where you belong" pera="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."/>
      <Information order="lg:order-1" infoimg={HomeImg2} heading="Create an invite-only place where you belong" pera="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."/>
      <Information order="order-0" infoimg={HomeImg3} heading="Create an invite-only place where you belong" pera="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."/>
      <Download/>
  </div>;
}

export default HandelInformation;
