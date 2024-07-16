"use client"

import { useLottie } from "lottie-react";
import haveAQuestion from "../../../public/assets/images/question.json";
const style = {
  height: 300,
};

const Example = () => {
  const options = {
    animationData: haveAQuestion,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Example;