'use client'
import { BGAnimateComp } from "@/src/app/backgrounds/bgAnimateComp";
import { Title } from "@/src/components/title";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components";
import React from "react";

interface IProps {
  url: string;
}
const Backgrounds = ({url = ''}:IProps) => {
  const pathname = usePathname()
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden">
      <Title title="Background Animation" />
      <div className="flex flex-wrap w-full gap-4">
        <BGAnimateComp type="bgAnim1" />
        <BGAnimateComp type="bgAnim2" />
      </div>
      {pathname !== '/backgrounds'  && <div className="w-full flex place-content-end ">
        <Button url={url}/>
      </div>}
    </div>
  );
};

export default Backgrounds;
