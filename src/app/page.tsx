import React from "react";
import ButtonList from "../components/listing/Button-List";
import TextList from "../components/listing/TextList";
import BgAnimList from "../components/listing/BgAnimList";

export default function Home() {
  return (
    <div className="gap-8 flex-col flex">
     <ButtonList/>
     <BgAnimList/>
     <TextList/>
    </div>
  );
}
