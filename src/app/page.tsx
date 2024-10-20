import { MousePointers } from "./mousePointers/page";
import ToggleSwitchs from "./toggleSwitches/page";
import { VideoCards } from "./videoCards/page";
import Backgrounds from "./backgrounds/page";
import Buttons from "./buttons/page";
import { Cards } from "./cards/page";
import Texts from "./texts/page";
import React from "react";

export default function Home() {
  return (
    <div className="gap-8 flex-col flex">
     <Buttons/>
     <Backgrounds url="backgrounds"/>
     <Texts/>
     <Cards/>
     <VideoCards/>
     <MousePointers/>
     <ToggleSwitchs/>
    </div>
  );
}
