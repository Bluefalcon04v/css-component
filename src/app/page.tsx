import React from "react";
import { Button } from "../components";
import { Title } from "../components/global/title";
import ButtonList from "../components/listing/Button-List";
import BGAnimateComp from "../components/listing/BGAnimateComp";

export default function Home() {
  return (
    <div className="gap-8 flex-col flex">
     <ButtonList/>
     <BGAnimateComp/>
    </div>
  );
}
