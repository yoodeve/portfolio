"use client";

import React from "react";
import Wrapper from "../Wrapper";
import { ScreenTop } from "./ScreenTop";
import { ScrollMid } from "./ScrollMid";

export default function Stack() {
  return (
    <Wrapper>
      <div className="flex justify-center flex-col text-white">
        <ScreenTop />
        <ScrollMid />
      </div>
    </Wrapper>
  );
}
