import { Title } from "@/src/components/title";
import React from "react";
import CardComp from "./cards";

export const Cards = () => {
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container ">
      <Title title="Cards Style" />
      <div className="flex flex-wrap w-full gap-4 ">
        <CardComp type="cardComp1" />
        <CardComp type="cardComp2" />
      </div>
    </div>
  );
};
