import Right_arrow_svg from "@/public/Svg/right-arrow-svg";
import { BtnTitle } from "../../components/title";
import React from "react";

export const ButtonsComp = ({ btnTitle, type }: any) => {
  if (type === "button1")
    return (
      <div className="flex flex-col">
        <div className="group uppercase font-semibold text-white relative cursor-pointer overflow-hidden border-2 px-2 w-fit rounded-full group-hover:bg-white">
          <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
            Hover Me!
          </span>
          <span className="inline-block p-1 transition duration-500 ease-out absolute left-0 translate-y-[120%] rotate-12 group-hover:translate-y-0 group-hover:rotate-0 px-2 w-full group-hover:bg-white group-hover:text-black">
            Hello!! 👋
          </span>
        </div>
        <BtnTitle btnTitle={btnTitle} />
      </div>
    );

  if (type === "button2")
    return (
      <div className="flex flex-col ">
        <div
          id="btn2"
          className="relative p-1 border-2 uppercase cursor-pointer px-4 rounded-full self-center"
        >
          <div id="text2" className="">
            {" "}
            <p>Hover Me!</p>
          </div>
        </div>
        <BtnTitle btnTitle={btnTitle} />
      </div>
    );
  if (type === "button3")
    return (
      <div className="flex flex-col ">
        <div
          id="btn3"
          className="relative p-1 border-2 uppercase cursor-pointer px-4 rounded-full self-center"
        >
          <div className="">
            {" "}
            <p>Hover Me!</p>
          </div>
        </div>
        <BtnTitle btnTitle={btnTitle} />
      </div>
    );
  if (type === "button4")
    return (
      <div className="flex flex-col ">
        <div
          id="btn4"
          className="relative p-1 border-2 uppercase cursor-pointer px-4 rounded-full self-center"
        >
          <div className="place-content-center flex items-center">
            <p>Hover Me!</p>
            <Right_arrow_svg id="button4-svg" className="fill-red-50" />
          </div>
        </div>
        <BtnTitle btnTitle={btnTitle} />
      </div>
    );

  if (type === "button5")
    return (
        <div className="bg-white w-fit pr-4 rounded-full h-10 flex place-items-center gap-1 cursor-pointer">
          <div className="w-12 h-12 bg-[#4174A8] rounded-full flex place-content-center place-items-center border-4 border-white">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8DACCA" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
                fill="url(#gradient)"
              />
            </svg>
          </div>
          <div className="text-xl font-black text-[#4174A8] ">
            Feedback
          </div>
        </div>
      )
};
