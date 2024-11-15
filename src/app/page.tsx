import ToggleSwitches from "./toggle-switches/page";
import MousePointers from "./mouse-pointers/page";
import Backgrounds from "./backgrounds/page";
import DatePicker from "./date-picker/page";
import VideoCards from "./video-cards/page";
import Buttons from "./buttons/page";
import Cards from "./cards/page";
import Texts from "./texts/page";
import React from "react";

export default function Home() {
  return (
    <div className="gap-8 flex-col flex">
     <Buttons url="buttons"/>
     <Backgrounds url="backgrounds"/>
     <Texts url="texts"/>
     <Cards url="cards"/>
     <VideoCards url="video-cards"/>
     <MousePointers url="mouse-pointers"/>
     <DatePicker url="date-picker"/>
     <ToggleSwitches url="toggle-switches"/>
    </div>
  );
}
