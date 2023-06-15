import React, { CSSProperties } from "react";

import Lottie from "react-lottie";
import firstAnimation from "../../src/models/firstAnimation.json";

interface LottiePlayerProps {
  animationData: any;
  style?: CSSProperties;
}

export default function FirstAnimation(Props: LottiePlayerProps) {
  const { animationData, style } = Props;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} style={style} />;
}
