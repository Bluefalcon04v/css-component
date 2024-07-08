import React from "react";
import { Button } from "../components";
import { Title } from "../components/global/title";

export default function Home() {
  return (
    <>
      <div className=" mx-auto px-8 py-8 w-11/12 glass-container">
        <Title title="Buttons" />
        <div className="flex gap-8">
          <Button type="button1" btnTitle="button 1" />
          <Button type="button2" btnTitle="button 2" />
        </div>

      </div>
    </>
  );
}
