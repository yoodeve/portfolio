import React from "react";
import Info from "./Info";
import { Experience } from "./Experience";

export const ScreenTop = () => {
  return (
    <div className="w-auto h-[90vh] justify-center items-center">
      <Info />
      <Experience />
    </div>
  );
};
