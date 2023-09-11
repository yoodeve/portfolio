"use client";

import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Memoji from "../../../image/memoji.png";

export default function Info() {
  return (
    <Wrapper>
      <div className="flex justify-center items-center">
        <Image className="w-48 m-10 cursor-pointer" src={Memoji} alt="memoji" />
        <div className="text-white">
          <div className="text-5xl font-bold hover:text-6xl cursor-pointer">
            한유정(Yoojung Han)
          </div>
          <div className="text-3xl font-bold  hover:text-4xl cursor-pointer">
            yooj.stud@gmail.com
          </div>
          <div className="text-3xl font-bold  hover:text-4xl cursor-pointer">
            010.6758.1457
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
