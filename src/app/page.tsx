import React from "react";
import { Buttons } from "../components";
import { Title } from "../components/global/title";

export default function Home() {
  return (
    <div className=" mx-auto px-6 py-12 bg-white/10 rounded-xl w-11/12 backdrop-blur-lgs backdrop-filter">
      <h1 className="text-4xl font-bold text-white py-4 uppercase underline">Components</h1>
      <Title title="Buttons"/>
      <Buttons />
    </div>
  );
}
