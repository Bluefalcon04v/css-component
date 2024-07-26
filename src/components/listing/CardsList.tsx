import React from "react";
import { Title } from "../global/title";
import CardComp from "../CardComp/Cards";

export const CardsList = () => {
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container ">
      <Title title="Cards Style" />
      <div className="flex flex-wrap w-full gap-4 ">
        <CardComp type="cardComp1" />
      </div>
    </div>
  );
};
