'use client'
import { Title } from "@/src/components/title";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components";
import CardComp from "./cards";
import React from "react";

const Cards = () => {
  const pathname = usePathname()
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container ">
      <Title title="Cards Style" />
      <div className="flex flex-wrap w-full gap-4 ">
        <CardComp type="cardComp1" />
        <CardComp type="cardComp2" />
      </div>
      {pathname !== '/cards' && <Button url={"cards"} />}
    </div>
  );
};
export default Cards