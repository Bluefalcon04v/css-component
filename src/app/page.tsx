import { MousePointerList } from "../components/listing/MousePointerList";
import ToggleSwitchList from "../components/listing/ToggleSwitchList";
import { VideoCardList } from "../components/listing/VideoCardList";
import { CardsList } from "../components/listing/CardsList";
import ButtonList from "../components/listing/Button-List";
import BgAnimList from "../components/listing/BgAnimList";
import TextList from "../components/listing/TextList";
import React from "react";

export default function Home() {
  return (
    <div className="gap-8 flex-col flex">
     <ButtonList/>
     <BgAnimList/>
     <TextList/>
     <CardsList/>
     <VideoCardList/>
     <MousePointerList/>
     <ToggleSwitchList/>
    </div>
  );
}
