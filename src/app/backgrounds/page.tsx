'use client'
import { BGAnimateComp } from "@/src/app/backgrounds/bgAnimateComp";
import { Title } from "@/src/components/title";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components";
import React from "react";

const Backgrounds = () => {
  const pathname = usePathname()
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden">
      <Title title="Background Animation" />
      <div className="flex flex-wrap w-full gap-4">
        <BGAnimateComp type="bgAnim1" />
        <BGAnimateComp type="bgAnim2" />
        <BGAnimateComp type="bgAnim3" />
      </div>
      {pathname !== '/backgrounds'  && <div className="w-full flex place-content-end ">
        <Button url={"backgrounds"}/>
      </div>}
    </div>
  );
};

export default Backgrounds;
