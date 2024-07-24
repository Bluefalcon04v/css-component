import Image from "next/image";
import React from "react";

const VideoComp = ({ type }: any) => {
  if (type === "videoComp1") {
    return (
    <div className="card-container" id="video-container-card1">
        <Image alt="Video_img" src={"/Images/img1.avif"} width={0} height={0} id="videoCard1-img" />
        <video autoPlay loop muted src="/Videos/video1.mp4" id="videoCard1-vid1"/>
    </div>);
  }
};

export default VideoComp;
