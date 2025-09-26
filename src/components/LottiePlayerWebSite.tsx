"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/webSite.json";

export default function LottiePlayer() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full max-w-md"
    />
  );
}
