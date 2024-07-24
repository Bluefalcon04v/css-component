import React from "react";
import ButtonList from "../components/listing/Button-List";
import TextList from "../components/listing/TextList";
import BgAnimList from "../components/listing/BgAnimList";
import { CardsList } from "../components/listing/CardsList";
import { VideoCardList } from "../components/listing/VideoCardList";
import { MousePointerList } from "../components/listing/MousePointerList";

export default function Home() {
  return (
    <div className="gap-8 flex-col flex">
     <ButtonList/>
     <BgAnimList/>
     <TextList/>
     <CardsList/>
     <VideoCardList/>
     <MousePointerList/>
    </div>
  );
}
