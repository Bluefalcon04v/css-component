import React from "react";
import { Button1 } from "../components";
import { Title } from "../components/global/title";

export default function Home() {
  return (
    <>
      <div className=" mx-auto px-8 py-8 w-11/12 glass-container">
        <Title title="Buttons" />
        <Button1 btnTitle="button 1"/>
      </div>
    </>
  );
}
